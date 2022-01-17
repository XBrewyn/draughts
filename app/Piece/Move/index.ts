import Board from '../../Board';
import { MoveStrategy } from '../../interfaces';
import { canMove } from '../validator';

class MoveWhitePiece implements MoveStrategy {
  public canMove(board: Board, currentPosition: string, selectPosition: string): boolean {
    return canMove(board, currentPosition, selectPosition, 1);
  }
};

class MoveBlackPiece implements MoveStrategy {
  public canMove(board: Board, currentPosition: string, selectPosition: string): boolean {
    return canMove(board, currentPosition, selectPosition, -1);
  }
};

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
