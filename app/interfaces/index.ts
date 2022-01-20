import Board from '../Board';

interface MoveStrategy {
  canMove(board: Board, piecePos: string, newPos: string): boolean;
};

interface EatStrategy {
  enemyPos: string;
  canEat(board: Board, piecePos: string, newPos: string): boolean;
};

interface Position {
  row: number;
  column: number;
};

interface EatPiece {
  canEat: boolean;
  targetPos: string;
};

export {
  MoveStrategy,
  EatStrategy,
  Position,
  EatPiece
};
