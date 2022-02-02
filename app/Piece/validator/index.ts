import Piece from '..'
import Board from '../../Board'
import Tool from '../../../Tools'
import { Color, ColumnPosition } from '../../../Tools/enums'
import { typeFormatPosition, typeEat } from '../../../Tools/types'

const canMove = (
  board: Board,
  piecePos: string,
  newPos: string,
  move: number
): boolean => {
  const piecePosn: typeFormatPosition = Tool.formatPosition(piecePos)
  const newPosn: typeFormatPosition = Tool.formatPosition(newPos)
  const isEmpty: boolean = board.searchPiece(newPos) === null
  const isRow: boolean = ((piecePosn.row + move) === newPosn.row)
  const isColumn: boolean = (
    (piecePosn.column + move) === newPosn.column ||
    (piecePosn.column - move) === newPosn.column
  )

  return (isRow && isColumn) && isEmpty
}

const getEnemyPos = (
  piecePos: string,
  newPos: string,
  color: Color
): string => {
  const piecePosn: typeFormatPosition = Tool.formatPosition(piecePos)
  const newPosn: typeFormatPosition = Tool.formatPosition(newPos)
  const move: number = (color === Color.WHITE) ? -1 : 1
  const row: number = (newPosn.row - move)
  const column: number = (
    (piecePosn.column < newPosn.column)
      ? (newPosn.column - 1)
      : (newPosn.column + 1)
  )

  return `${ColumnPosition[column]}${row}`
}

const eatPiece = (
  board: Board,
  piecePos: string,
  newPos: string,
  color: Color,
  move: number
): typeEat => {
  const targetPos: string = getEnemyPos(piecePos, newPos, color)
  const target: Piece = Object.assign({}, board.searchPiece(targetPos))
  const canMov: boolean = canMove(board, piecePos, newPos, move)
  const canEat: boolean = (target.color !== color)

  return {
    canEat: (canMov && canEat),
    targetPos
  }
}

export {
  canMove,
  eatPiece,
  getEnemyPos
}
