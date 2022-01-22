import Board from '../Board'

interface MoveStrategy {
  canMove(board: Board, piecePos: string, newPos: string): boolean;
};

interface EatStrategy {
  enemyPos: string;
  canEat(board: Board, piecePos: string, newPos: string): boolean;
};

export {
  MoveStrategy,
  EatStrategy
}
