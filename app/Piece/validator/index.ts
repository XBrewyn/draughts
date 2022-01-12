import Tool from '../../Tools';

const canMove = (currentPosition: string, selectPosition: string, condiction: (currentRow: number) => number) => {
  const [newColumn, newRow] = Tool.formatPosition(selectPosition);
    const [currentColumn, currentRow] = Tool.formatPosition(currentPosition);
    const isValidRow = (condiction(currentRow) === newRow);
    const isValidColumn = (
      (currentColumn + 1) === newColumn ||
      (currentColumn - 1) === newColumn
    );

    return isValidColumn && isValidRow;
}

export {
  canMove
};
