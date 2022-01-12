import Board from './Board';
import WhiteToken from './Piece/WhiteToken';
import BlackToken from './Piece/BlackToken';
import Tool from './Tools';
import { Color } from './Tools/enums';
import { TypePiece } from './Tools/types';

class Game {
  private _board: Board = this.buildBoard();
  private _colorTurn: Color = Color.WHITE;
  private _piece: TypePiece | null = null;
  private _selectPosition: string = '';

  constructor() {
    this._board.display();

    Tool.input('[piecePos, selectPos]: ', (positions: string) => {
      const [piecePos, selectPos]: any = positions.split(' ');

      this._piece = this._board.searchPiece(piecePos);
      this._selectPosition = selectPos;
  
      if (this.checkTurn()) {
        this.movePiece();
      }

      this._board.display();
      this.notifyGame();
    });
  }

  private buildBoard(): Board {
    const boardInstance = Board.getInstance(); 

    boardInstance.addPiece({
      white: WhiteToken,
      black: BlackToken
    });

    return boardInstance;
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

  private changeTurn(): void {
    const color = this._colorTurn;

    this._colorTurn = (color === Color.BLACK) ? Color.WHITE : Color.BLACK;
  }

  private notifyGame(): void {
    const { symbol = '', color }: any = this._piece || {};
    const isValidSelectPos: boolean = this._board.isPosition(this._selectPosition);
    let status: string = '';

    if (!this._piece && !isValidSelectPos) {
      status = 'Please select two valid positions ⚠️';
    } else if (this._colorTurn !== color) {
      status = `${symbol} It\'s not your turn ❌`;
    } else if (this._piece && isValidSelectPos) {
      status = `${symbol} moved to ${this._piece.position} ✅`;

      this.changeTurn();
    }

    console.log(`\nStatus: ${status}\n`);
  }

  private checkTurn(): boolean {
    const { color = '' } = this._piece || {};
    const colorTurn = this._colorTurn;
    let isTurn: boolean = false;

    if ((color === colorTurn) || (color === colorTurn)) {
      isTurn = true;
    }

    return isTurn;
  }
}

new Game();
