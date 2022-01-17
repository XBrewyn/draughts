import Board from '../../Board';
import Tool from '../../Tools';

const canMove = (board: Board, currentPosition: string, selectPosition: string, step: number) => {
  const isEmptySelectPosition: boolean = board.searchPiece(selectPosition) === null;
  const [newColumn, newRow] = Tool.formatPosition(selectPosition);
  const [currentColumn, currentRow] = Tool.formatPosition(currentPosition);
  const isValidRow = ((currentRow + step) === newRow);
  const isValidColumn = (
    (currentColumn + step) === newColumn ||
    (currentColumn - step) === newColumn
  );

  return (isValidColumn && isValidRow) && isEmptySelectPosition;
}

const canEat = (board: Board, currentPosition: string, selectPosition: string, step: number) => {
  return canMove(board, currentPosition, selectPosition, step);
}

export {
  canMove,
  canEat
};
