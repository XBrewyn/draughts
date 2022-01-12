interface MoveStrategy {
  canMove(currentPosition: string, selectPosition: string): boolean;
};

export {
  MoveStrategy
}