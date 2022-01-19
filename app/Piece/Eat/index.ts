import Board from '../../Board';
import { EatPiece, EatStrategy } from '../../interfaces';
import { Color } from '../../Tools/enums';
import { eatPiece } from '../validator';

const STEP_MOVE = 2;

class EatWhitePiece implements EatStrategy {
  enemyPos: any;

  public canEat(board: Board, currentPosition: string, selectPosition: string) {
    const { canEat, enemyPos }: EatPiece = eatPiece(board, currentPosition, selectPosition, Color.BLACK, STEP_MOVE);

    this.enemyPos = enemyPos;

    return canEat;
  }
}

class EatBlackPiece implements EatStrategy {
  enemyPos: any;

  public canEat(board: Board, currentPosition: string, selectPosition: string) {
    const { canEat, enemyPos } = eatPiece(board, currentPosition, selectPosition, Color.BLACK, STEP_MOVE);

    this.enemyPos = enemyPos;

    return canEat;
  }
}

class EatKingPiece implements EatStrategy {
  enemyPos: string;

  public canEat(board: Board, currentPosition: string, selectPosition: string): boolean {
    return false;
  }
}

export {
  EatWhitePiece,
  EatBlackPiece,
  EatKingPiece
};
