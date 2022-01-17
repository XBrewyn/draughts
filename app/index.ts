import Board from './Board';
import Menu from './Menu';
import WhiteToken from './Piece/WhiteToken';
import BlackToken from './Piece/BlackToken';
import Tool from './Tools';
import { Color, Option } from './Tools/enums';
import Graph from './Graph';
import Piece from './Piece';
import Status from './Status';

class Game {
  private _board: Board = this.buildBoard();
  private _colorTurn: Color = Color.WHITE;
  private _piece: Piece | null = null;
  private _selectPosition: string = '';
  private _selectPiece: string = '';
  private _menuOptions: any = [
    {
      name: Option.PLAY_GAME,
      display: () => this.start()
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
      white: WhiteToken,
      black: BlackToken
    });

    return boardInstance;
  }

  private start(): void {
    this.display();

    Tool.input('\t[piecePos, selectPos]: ', (positions: string) => {
      const [piecePos, selectPos]: any = positions.split(' to ');

      this._piece = this._board.searchPiece(piecePos);
      this._selectPosition = selectPos;
      this._selectPiece = piecePos;

      if (this.checkTurn()) {
        this.movePiece();
      }

      this.display();
    });
  }

  private checkTurn(): boolean {
    const { color = '' } = this._piece || {};

    return (color === this._colorTurn) ? true : false;
  }

  private movePiece(): void {
    if (this._board.isPosition(this._selectPosition)) {
      const isEmptySquare: boolean = this._board.searchPiece(this._selectPosition) === null;
      const canMove: boolean = isEmptySquare && this._piece.canMove(this._selectPosition);

      if (canMove) {
        this._board.update(this._piece, this._selectPosition);
      }
    }
  }

  private display(): void {
    this._board.display();
    Status.display(this);
  }

  private changeTurn(): void {
    const color = this._colorTurn;

    this._colorTurn = (color === Color.BLACK) ? Color.WHITE : Color.BLACK;
  }
}

new Game();
