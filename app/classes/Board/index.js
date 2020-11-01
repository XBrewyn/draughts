import Tool from '../Tool';
import Piece from '../Piece';

const { loop, abc } = new Tool();

class Board {
  get get() {
    const res = [];
    let newRow = [];
    let squareColor = '';
    let rest = 1;

    loop(8, (row) => {
      loop(8, (colum) => {
        const currentPos = (abc[colum] + (row + 1));

        squareColor = ((colum % 2) === rest) ? 'white' : 'black';
        newRow.push([this.addPiece(row, currentPos, squareColor), squareColor, currentPos]);
      });

      res.push(newRow);
      newRow = [];
      rest = (rest === 0) ? 1 : 0;
    });

    return res.reverse();
  }

  addPiece(row, currentPos, squareColor) {
    const isBlackSquare = squareColor === 'black';
    let addPiece = null;

    if ((row <= 2) && isBlackSquare) {
      addPiece = new Piece('white', currentPos);
    } if ((row >= 5) && isBlackSquare) {
      addPiece = new Piece('black', currentPos);
    }

    return addPiece;
  }
}

export default Board;
