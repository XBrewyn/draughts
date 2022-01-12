import Tool from '../../Tools';

const isValid = (currentPosition: string, selectPosition: string, condiction: number) => {
  const [newColumn, newRow] = Tool.formatPosition(selectPosition);
    const [currentColumn] = Tool.formatPosition(currentPosition);
    const isValidRow = (condiction === newRow);
    const isValidColumn = (
      (currentColumn + 1) === newColumn ||
      (currentColumn - 1) === newColumn
    );

    return isValidColumn && isValidRow;
}

interface MoveStrategy {
  canMove(currentPosition: string, selectPosition: string): boolean;
}

class MoveWhiteToken implements MoveStrategy {
  public canMove(currentPosition: string, selectPosition: string): boolean {
    const [currentColumn, currentRow] = Tool.formatPosition(currentPosition);

    return isValid(currentPosition, selectPosition, (currentRow + 1));
  }
}

class MoveBlackToken implements MoveStrategy {
  public canMove(currentPosition: string, selectPosition: string): boolean {
    const [currentColumn, currentRow] = Tool.formatPosition(currentPosition);

    return isValid(currentPosition, selectPosition, (currentRow - 1));
  }
}

class MoveKingToken implements MoveStrategy {
  public canMove(currentPosition: string, selectPosition: string): boolean {
    return false;
  }
}

export {
  MoveWhiteToken,
  MoveBlackToken,
  MoveKingToken
};
