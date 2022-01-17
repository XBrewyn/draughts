import Board from '../../Board';
import { EatStrategy } from '../../interfaces';
import { canMove } from '../validator';

class EatWhitePiece implements EatStrategy {
  public canEat(board: Board, currentPosition: string, selectPosition: string): boolean {
    return canMove(board, currentPosition, selectPosition, 2) && false;
  }
}

class EatBlackPiece implements EatStrategy {
  public canEat(board: Board, currentPosition: string, selectPosition: string): boolean {
    return canMove(board, currentPosition, selectPosition, -2) && false;
  }
}

class EatKingPiece implements EatStrategy {
  public canEat(board: Board, currentPosition: string, selectPosition: string): boolean {
    return false;
  }
}

export {
  EatWhitePiece,
  EatBlackPiece,
  EatKingPiece
};
