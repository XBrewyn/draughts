import { Color, Option, Message } from './Tools/enums';
import BlackToken from './Piece/BlackToken';
import Board from './Board';
import Graph from './Graph';
import Menu from './Menu';
import Piece from './Piece';
import Statu from './Status';
import Tool from './Tools';
import WhiteToken from './Piece/WhiteToken';

class Game {
  private _board: Board = this.buildBoard();
  private _colorTurn: Color = Color.WHITE;
  private _piece: Piece | null = null;
  private _selectPiece: string = '';
  private _selectPosition: string = '';
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
    Tool.input('\t[piecePos, selectPos]: ', (positions: string) => {
      const [piecePos, selectPos]: any = positions.split(' to ');

      this._piece = this._board.searchPiece(piecePos);
      this._selectPiece = piecePos;
      this._selectPosition = selectPos;

      if (this.checkTurn()) {
        this.movePiece();
      }
    });
  }

  private checkTurn(): boolean {
    const { color: colorPiece = '' } = this._piece || {};

    return (colorPiece === this._colorTurn) ? true : false;
  }

  private movePiece(): void {
    const canMove: boolean = this._piece.canMove(this._board, this._selectPosition);

    if (canMove) {
      this._board.update(this._piece, this._selectPosition);
      this.changeTurn();
    }
  }

  private changeTurn(): void {
    this._colorTurn = (this._colorTurn === Color.BLACK) ? Color.WHITE : Color.BLACK;
  }
}

new Game();
