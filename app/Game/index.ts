import { Color } from '../../Tools/enums'
import BlackPiece from '../Piece/BlackPiece'
import Board from '../Board'
import Piece from '../Piece'
import Status from '../Status'
import Tool from '../../Tools'
import WhitePiece from '../Piece/WhitePiece'

abstract class Game {
  protected board: Board
  protected canEat: boolean = false
  protected canMove: boolean = false
  protected turn: Color = Color.WHITE
  protected piece: Piece | null = null
  protected piecePos: string = ''
  protected newPos: string = ''

  constructor () {
    this.board = new Board(10)
    this.board.addPiece({ WhitePiece, BlackPiece })
    this.start()
  }

  protected start (): void {
    this.displayGame()

    Tool.input('\t[piecePos, newPos]: ', (positions: string) => {
      const [piecePos, newPos]: string[] = positions.split(' to ')

      this.piece = this.board.searchPiece(piecePos)
      this.piecePos = piecePos
      this.newPos = newPos

      if (this.checkTurn()) {
        this.movePiece()
      }

      this.displayGame()
    })
  }

  protected displayGame (): void {
    this.board.display()
    Status.display(this)
  }

  protected checkTurn (): boolean {
    const defaultColor = { color: '' }
    const piece: Piece | typeof defaultColor = (this.piece || defaultColor)

    return (piece.color === this.turn)
  }

  protected movePiece (): void {
    const { newPos, piece, board } = this

    this.canMove = piece.canMove(board, newPos)
    this.canEat = piece.canEat(board, newPos)

    if (this.canMove) {
      board.update(piece, newPos)
      this.changeTurn()
    } else if (this.canEat) {
      board.remove(piece.targetPos)
      board.update(piece, newPos)
    }
  }

  protected changeTurn (): void {
    this.turn = (this.turn === Color.BLACK) ? Color.WHITE : Color.BLACK
  }
}

export default Game
