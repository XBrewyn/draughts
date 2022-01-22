import { ColumnPosition } from '../Tools/enums'
import { formatPosition } from '../Tools/types'
import Graph from '../Graph'
import Piece from '../Piece'
import Tool from '../Tools'

class Board {
  private _board: any[][]

  constructor () {
    this._board = this.buildBoard()
  }

  private buildBoard (): number[][] {
    const arrays: number[] = Tool.range(10)

    return arrays.map(() => arrays)
  }

  public get (): any[][] {
    return this._board
  }

  public isSquareBlack (row: number, column: number): boolean {
    return (row % 2) === ((column % 2 === 1) ? 0 : 1)
  }

  public remove (position: string): void {
    const { row, column }: formatPosition = Tool.formatPosition(position, 1)

    this._board[row][column] = null
  }

  public update (piece: Piece, selectPosition: string): void {
    const piecePos: formatPosition = Tool.formatPosition(piece.position, 1)
    const selectPos: formatPosition = Tool.formatPosition(selectPosition, 1)

    this._board[piecePos.row][piecePos.column] = null
    this._board[selectPos.row][selectPos.column] = piece

    piece.position = selectPosition
  }

  public searchPiece (searchPosition: string): Piece | null {
    const { row, column }: formatPosition = Tool.formatPosition(searchPosition, 1)

    return this.isPosition(searchPosition)
      ? this._board[row][column]
      : null
  }

  public isPosition (...positions: string[]): boolean {
    return positions.every((position) =>
      /(^[a-j]{1})+([1-9]{1}|10)$/.test(position))
  }

  public display () {
    Graph.board(this)
  }

  public addPiece ({ WhitePiece, BlackPiece }: any = {}): void {
    this._board = this._board.map((rows: any[], indexRow: number) =>
      rows.map((__, indexColumn: number) => {
        const isSquareBlack: boolean = this.isSquareBlack(indexRow, indexColumn)
        const position: string = ColumnPosition[indexColumn + 1] + (indexRow + 1)
        let piece: Piece | null = null

        if (isSquareBlack && indexRow <= 3) {
          piece = new WhitePiece(position)
        } else if (isSquareBlack && indexRow >= 6) {
          piece = new BlackPiece(position)
        }

        return piece
      })
    )
  }
}

export default Board
