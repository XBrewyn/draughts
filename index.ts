import { Color, Option } from './app/Tools/enums'
import { typeMenuOption } from './app/Tools/types'
import BlackPiece from './app/Piece/BlackPiece'
import Board from './app/Board'
import Graph from './app/Graph'
import Menu from './app/Menu'
import Piece from './app/Piece'
import Status from './app/Status'
import Tool from './app/Tools'
import WhitePiece from './app/Piece/WhitePiece'

class Game {
  private _board: Board
  private _canEat: boolean = false
  private _canMove: boolean = false
  private _colorTurn: Color = Color.WHITE
  private _piece: Piece | null = null
  private _piecePos: string
  private _newPos: string
  private _menuOption: typeMenuOption = [
    {
      name: Option.PLAY_GAME,
      display: () => this.start()
    },
    {
      name: Option.ONLINE,
      display: () => Graph.notAvailable()
    },
    {
      name: Option.VS_CPU,
      display: () => Graph.notAvailable()
    },
    {
      name: Option.AUTHOR,
      display: () => Graph.author()
    },
    {
      name: Option.EXIT,
      display: (exit: () => {}) => {
        Graph.gameOver()
        exit()
      }
    }
  ]

  constructor () {
    this._board = this.buildBoard()

    Menu.display(this._menuOption)
  }

  private buildBoard (): Board {
    const board: Board = new Board()

    board.addPiece({
      WhitePiece,
      BlackPiece
    })

    return board
  }

  private start (): void {
    this.displayGame()

    Tool.input('\t[piecePos, newPos]: ', (positions: string) => {
      const [piecePos, newPos]: string[] = positions.split(' to ')

      this._piece = this._board.searchPiece(piecePos)
      this._piecePos = piecePos
      this._newPos = newPos

      if (this.checkTurn()) {
        this.movePiece()
      }

      this.displayGame()
    })
  }

  private displayGame (): void {
    this._board.display()
    Status.display(this)
  }

  private checkTurn (): boolean {
    const defaultColor = { color: '' }
    const piece: Piece | typeof defaultColor = (this._piece || defaultColor)

    return (piece.color === this._colorTurn)
  }

  private movePiece (): void {
    this._canMove = this._piece.canMove(this._board, this._newPos)
    this._canEat = this._piece.canEat(this._board, this._newPos)

    if (this._canMove) {
      this._board.update(this._piece, this._newPos)
      this.changeTurn()
    } else if (this._canEat) {
      this._board.remove(this._piece.targetPos)
      this._board.update(this._piece, this._newPos)
    }
  }

  private changeTurn (): void {
    this._colorTurn = (this._colorTurn === Color.BLACK) ? Color.WHITE : Color.BLACK
  }
}

(() => new Game())()
