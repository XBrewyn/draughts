import Board from '../Board';

interface MoveStrategy {
  canMove(board: Board, currentPosition: string, selectPosition: string): boolean;
};

interface EatStrategy {
  enemyPos: string;
  canEat(board: Board, currentPosition: string, selectPosition: string): boolean;
};

interface Position {
  row: number;
  column: number;
};

interface EatPiece {
  canEat: boolean;
  enemyPos: string;
}

export {
  MoveStrategy,
  EatStrategy,
  Position,
  EatPiece
};
