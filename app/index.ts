import { Color, Option } from './Tools/enums';
import BlackPiece from './Piece/BlackPiece';
import Board from './Board';
import Graph from './Graph';
import Menu from './Menu';
import Piece from './Piece';
import Status from './Status';
import Tool from './Tools';
import WhitePiece from './Piece/WhitePiece';

class Game {
  private _board: Board = this.buildBoard();
  private _canEat: boolean = false;
  private _canMove: boolean = false;
  private _colorTurn: Color = Color.WHITE;
  private _piece: Piece | null = null;
  private _selectPiecePos: string;
  private _selectPosition: string;
  private _menuOptions: any = [
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
        Graph.gameOver();
        exit();
      }
    },
  ];

  constructor() {
    const menu = new Menu(this._menuOptions);

    menu.display();
  }

  private buildBoard(): Board {
    const boardInstance = Board.getInstance(); 

    boardInstance.addPiece({
      white: WhitePiece,
      black: BlackPiece
    });

    return boardInstance;
  }

  private start(): void {
    this.displayGame();

    Tool.input('\t[piecePos, newPos]: ', (positions: string) => {
      const [piecePos, newPos]: any = positions.split(' to ');

      this._piece = this._board.searchPiece(piecePos);
      this._selectPiecePos = piecePos;
      this._selectPosition = newPos;

      if (this.checkTurn()) this.movePiece();

      this.displayGame();
    });
  }

  private displayGame(): void {
    this._board.display();
    Status.display(this);
  }

  private checkTurn(): boolean {
    const { _piece: { color = '' } = {}, _colorTurn }: any = this;

    return (color === _colorTurn) ? true : false;
  }

  private movePiece(): void {
    this._canMove = this._piece.canMove(this._board, this._selectPosition);
    this._canEat = this._piece.canEat(this._board, this._selectPosition);

    if (this._canMove) {
      this._board.update(this._piece, this._selectPosition);
      this.changeTurn();

    } else if (this._canEat) {
      this._board.remove(this._piece.enemyPos);
      this._board.update(this._piece, this._selectPosition);
    }
  }

  private changeTurn(): void {
    this._colorTurn = (this._colorTurn === Color.BLACK) ? Color.WHITE : Color.BLACK;
  }
}

new Game();
