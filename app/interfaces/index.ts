import Board from '../Board';

interface MoveStrategy {
  canMove(board: Board, currentPosition: string, selectPosition: string): boolean;
};

interface EatStrategy {
  canEat(board: Board, currentPosition: string, selectPosition: string): boolean;
};

export {
  MoveStrategy,
  EatStrategy
};
