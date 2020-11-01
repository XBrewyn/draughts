import Tool from '../Tool';

const { getPosition } = new Tool();

class Piece {
  constructor(color, currentPos) {
    this.color = color;
    this.currentPos = currentPos;
    this.icon = color === 'black' ? '⬤'.black : '⬤';
  }

  move(board, newPosition) {
    const newPos = getPosition(newPosition);
    const currentPos = getPosition(this.currentPos);
    const piece = board[currentPos[1]][currentPos[0]][0];
    let isValid = false;

    if (this.isValid(board, currentPos, newPos)) {
      isValid = true;
      board[currentPos[1]][currentPos[0]][0] = null;
      board[newPos[1]][newPos[0]][0] = piece;
      this.currentPos = newPosition;
    }

    return isValid;
  }

 
  isValid(board, currentPos, newPos) {
    return (
      (this.isMovePiece(currentPos, newPos) && this.isPositionEmpty(board, newPos))
    );
  }

  isMovePiece(currentPos, newPos, move = 1, board) {
    const [currentX, currentY] = currentPos;
    const [nextX, nextY] = newPos;
    const inclinedWhite = (
      (currentX + move) === nextX && (currentY - move) === nextY ||
      (currentX - move) === nextX && (currentY - move) === nextY);
    const inclinedBlack = (
      (currentX + move) === nextX && (currentY + move) === nextY ||
      (currentX - move) === nextX && (currentY + move) === nextY);

    return this.color === 'white' ? inclinedWhite : inclinedBlack;
  }

  isEat(currentPos, newPos, board) {
    this.isMovePiece(currentPos, newPos, 2, board);
  }

  isPositionEmpty(board, newPos) {
    const [nextX, nextY] = newPos;
    const piece = board[nextX][nextY][0];

    return piece !== null;
  }
}

export default Piece;
