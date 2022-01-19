import Piece from '..';
import Board from '../../Board';
import { Position } from '../../interfaces';
import Tool from '../../Tools';
import { Color, ColumnPosition } from '../../Tools/enums';

const canMove = (
  board: Board,
  currentPosition: string,
  selectPosition: string,
  step: number
) => {
  const piecePos: Position = Tool.formatPosition(currentPosition);
  const selectPos: Position = Tool.formatPosition(selectPosition);
  const isEmptySelectPosition: boolean = board.searchPiece(selectPosition) === null;
  const isValidRow: boolean = ((piecePos.row + step) === selectPos.row);
  const isValidColumn: boolean = (
    (piecePos.column + step) === selectPos.column ||
    (piecePos.column - step) === selectPos.row
  );

  return (isValidColumn && isValidRow) && isEmptySelectPosition;
}

const getEnemyPos = (
  currentPosition: string, 
  selectPosition: string,
  color: Color
): string => {
  const piecePos: Position = Tool.formatPosition(currentPosition);
  const selectPos: Position = Tool.formatPosition(selectPosition);
  const stepEat = (color === Color.WHITE) ? -1 : 1;

  let enemyPosColumn: number = (selectPos.column + 1);
  let enemyPosRow: number = (selectPos.row - stepEat);

  if (piecePos.column < selectPos.column) {
    enemyPosColumn = (selectPos.column - 1);
  }

  return `${ColumnPosition[enemyPosColumn]}${enemyPosRow}`;
}

const eatPiece = (
  board: Board,
  currentPosition: string,
  selectPosition: string,
  color: Color,
  stepMove: number,
): any => {
  const enemyPos: string = getEnemyPos(currentPosition, selectPosition, color);
  const enemyPiece: Piece = Object.assign({}, board.searchPiece(enemyPos));
  const canMov: boolean = canMove(board, currentPosition, selectPosition, stepMove);
  const canEat: boolean = (enemyPiece.color !== color) ? true : false;

  return {
    canEat: (canMov && canEat),
    enemyPos
  }
}

export {
  canMove,
  eatPiece,
  getEnemyPos
};
