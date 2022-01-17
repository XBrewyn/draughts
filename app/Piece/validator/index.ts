import Tool from '../../Tools';

const canMove = (currentPosition: string, selectPosition: string, step: number) => {
  const [newColumn, newRow] = Tool.formatPosition(selectPosition);
    const [currentColumn, currentRow] = Tool.formatPosition(currentPosition);
    const isValidRow = ((currentRow + step) === newRow);
    const isValidColumn = (
      (currentColumn + step) === newColumn ||
      (currentColumn - step) === newColumn
    );

  return isValidColumn && isValidRow;
}

const canEat = (currentPosition: string, selectPosition: string, step: number) => {
  return canMove(currentPosition, selectPosition, step);
}

export {
  canMove,
  canEat
};
