import Board from '../Board';
import Graph from '../Graph';
import Tool from '../Tool';

const { input, space, getPosition } = new Tool();
const { get: board } = new Board();

class Main {
  constructor() {
    this.turn = 'white';
  }

  start() {
    Graph.board(board, this.turn);

    input(`${space(8)}Move: `, (data) => {
      const [currentPos, newPos] = data.split(' ');
      const [nextY, nextX] = getPosition(currentPos);
      const piece = board[nextX][nextY][0];

      if (this.isTurn(piece) && piece.move(board, newPos)) {
        this.changeTurn();

        Graph.board(board, this.turn);
      }
    });
  }

  isTurn(piece) {
    return (piece !== null) ? (this.turn === piece.color) : false;
  }

  changeTurn() {
    this.turn = this.turn === 'white' ? 'black' : 'white';
  }
}

export default Main;
