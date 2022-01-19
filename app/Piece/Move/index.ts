import Board from '../../Board';
import { MoveStrategy } from '../../interfaces';
import { canMove } from '../validator';

const STEP = 1;

class MoveWhitePiece implements MoveStrategy {
  public canMove(board: Board, currentPosition: string, selectPosition: string): boolean {
    return canMove(board, currentPosition, selectPosition, STEP);
  }
}

class MoveBlackPiece implements MoveStrategy {
  public canMove(board: Board, currentPosition: string, selectPosition: string): boolean {
    return canMove(board, currentPosition, selectPosition, -STEP);
  }
}

class MoveKingPiece implements MoveStrategy {
  public canMove(board: Board, currentPosition: string, selectPosition: string): boolean {
    return false;
  };
};

export {
  MoveWhitePiece,
  MoveBlackPiece,
  MoveKingPiece
};
