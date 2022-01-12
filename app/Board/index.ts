import { Color, ColumnPosition } from '../Tools/enums';
import WhiteToken from '../Piece/WhiteToken';
import BlackToken from '../Piece/BlackToken';
import Tool from '../Tools';
import { TypePiece } from '../Tools/types';
import Graph from '../Graph';

class Board {
  private static _instance: Board;
  private _board: any[];
 
  private constructor() {
    this._board = this.buildBoard();
  }

  public static getInstance() {
    if (!Board._instance) Board._instance = new Board();

    return Board._instance;
  }

  private buildBoard(): object[] {
    const arrays: object[] = [[], [], [], [], [], [], [], [], [], []];

    return arrays.map(() => arrays);
  }

  public get(): any[] {
    return this._board;
  }

  public isSquareBlack(row: number, column: number): boolean {
    return this.getSquareColor(row, column) === Color.BLACK;
  }

  public isSquareWhite(row: number, column: number): boolean {
    return this.getSquareColor(row, column) === Color.WHITE;
  }

  public getSquareColor(row: number, column: number): Color {
    return row % 2 === ((column % 2 === 0) ? 1 : 0) ? Color.WHITE : Color.BLACK;
  }

  public update(piece: TypePiece, selectPosition: string) {
    const [piecePosColumn, piecePosRow] = Tool.formatPosition(piece.position, 1);
    const [newPosColumn, newPosRow] = Tool.formatPosition(selectPosition, 1);
    
    this._board[piecePosRow][piecePosColumn] = null;
    this._board[newPosRow][newPosColumn] = piece;

    piece.position = selectPosition;
  }

  public searchPiece(searchPosition: string): TypePiece | null {
    let piece: TypePiece | null = null;

    if (this.isPosition(searchPosition)) {
      const [column, row]: number[] = Tool.formatPosition(searchPosition, 1);

      piece = this._board[row][column];
    }

    return piece;
  }

  public isPosition(...positions: string[]): boolean {
    return positions.every((position) => 
      /(^[a-j]{1})+([1-9]{1}|10)$/.test(position));
  }

  public display() {
    Graph.board(Board._instance);
  }

  public addPiece({ white, black }: any = {}): void {
    this._board = this._board.map((rows: any[], indexRow: number) =>
      rows.map((__, indexColumn: number) => {
        let piece: WhiteToken | BlackToken | null = null;
        const isSquareBlack: boolean = this.isSquareBlack(indexRow, indexColumn);
        const position: string = ColumnPosition[indexColumn + 1] + (indexRow + 1);

        if (isSquareBlack && indexRow <= 3) {
          piece = new white(position);  
        } else if (isSquareBlack && indexRow >= 6) {
          piece = new black(position);
        }

        return piece;
      })
    );
  }
}

export default Board;
