import Piece from '..';
import Board from '../../Board';
import { Position } from '../../interfaces';
import Tool from '../../Tools';
import { Color, ColumnPosition } from '../../Tools/enums';

const canMove = (
  board: Board,
  piecePos: string,
  newPos: string,
  step: number
) => {
  const piecePosn: Position = Tool.formatPosition(piecePos);
  const newPosn: Position = Tool.formatPosition(newPos);
  const isEmpty: boolean = board.searchPiece(newPos) === null;
  const isRow: boolean = ((piecePosn.row + step) === newPosn.row);
  const isColumn: boolean = (
    (piecePosn.column + step) === newPosn.column ||
    (piecePosn.column - step) === newPosn.column
  );

  return (isRow && isColumn) && isEmpty;
}

const getEnemyPos = (
  piecePos: string, 
  newPos: string,
  color: Color
): string => {
  const piecePosn: Position = Tool.formatPosition(piecePos);
  const newPosn: Position = Tool.formatPosition(newPos);
  const step: number = (color === Color.WHITE) ? -1 : 1;
  const row: number = (newPosn.row - step);
  const column: number = (
    (piecePosn.column < newPosn.column)
      ? (newPosn.column - 1)
      : (newPosn.column + 1)
  );

  return `${ColumnPosition[column]}${row}`;
}

const eatPiece = (
  board: Board,
  piecePos: string,
  newPos: string,
  color: Color,
  stepMove: number,
): any => {
  const targetPos: string = getEnemyPos(piecePos, newPos, color);
  const target: Piece = Object.assign({}, board.searchPiece(targetPos));
  const canMov: boolean = canMove(board, piecePos, newPos, stepMove);
  const canEat: boolean = (target.color !== color) ? true : false;

  return {
    canEat: (canMov && canEat),
    targetPos
  };
}

export {
  canMove,
  eatPiece,
  getEnemyPos
};
