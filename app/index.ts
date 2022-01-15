import Board from './Board';
import Menu from './Menu';
import WhiteToken from './Piece/WhiteToken';
import BlackToken from './Piece/BlackToken';
import Tool from './Tools';
import { Color, Icon, Option } from './Tools/enums';
import { TypePiece } from './Tools/types';
import Graph from './Graph';

class Game {
  private _board: Board = this.buildBoard();
  private _colorTurn: Color = Color.WHITE;
  private _piece: TypePiece | null = null;
  private _selectPosition: string = '';
  private _targetPosition: string = '';

  constructor() {
    const options = [
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

    const menu = new Menu(options);

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
      this._targetPosition = piecePos;
  
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
    this.displayStatus();
    this.displayTurn();
  }

  private displayStatus(): void {
    const { icon = '', color }: any = this._piece || {};
    const isValidSelectPos: boolean = this._board.isPosition(this._selectPosition);
    let status: string = '';

    if (!this._piece || !isValidSelectPos) {
      status = 'Please select two valid positions 💜';

    } else if (this._colorTurn !== color) {
      status = `${icon} It\'s not your turn ❌`;

    } else if (this._piece && isValidSelectPos) {
      status = `${icon} ${this._targetPosition} to ${this._selectPosition} ✅`;

      this.changeTurn();
    }

    console.log(`\tStatus: ${status}\n`);
  }

  private changeTurn(): void {
    const color = this._colorTurn;

    this._colorTurn = (color === Color.BLACK) ? Color.WHITE : Color.BLACK;
  }

  private displayTurn(): void {
    console.log(`\tTurn: ${Icon[this._colorTurn]}\n`);
  }
}

new Game();
