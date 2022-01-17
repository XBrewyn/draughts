interface MoveStrategy {
  canMove(currentPosition: string, selectPosition: string): boolean;
};

interface EatStrategy {
  canMove(currentPosition: string, selectPosition: string): boolean;
};

export {
  MoveStrategy,
  EatStrategy
};
