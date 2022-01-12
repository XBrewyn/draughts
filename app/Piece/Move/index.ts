import { MoveStrategy } from "../../interfaces";
import { canMove } from "../validator";

class MoveWhiteToken implements MoveStrategy {
  public canMove(currentPosition: string, selectPosition: string): boolean {
    return canMove(currentPosition, selectPosition, (currentRow) => (currentRow + 1));
  }
};

class MoveBlackToken implements MoveStrategy {
  public canMove(currentPosition: string, selectPosition: string): boolean {
    return canMove(currentPosition, selectPosition, (currentRow) => (currentRow + 1));
  }
};

class MoveKingToken implements MoveStrategy {
  public canMove(currentPosition: string, selectPosition: string): boolean {
    return false;
  }
};

export {
  MoveWhiteToken,
  MoveBlackToken,
  MoveKingToken
};
