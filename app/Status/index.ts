import { Icon } from '../Tools/enums';

class Status {
  public static display(state: any = {}) {
    const { _selectPosition, _board, _colorTurn, _selectPiece, _piece }: any = state;
    const { icon = '', color: pieceColor = '' }: any = _piece || {}; 
    const canMove: boolean = _board.isPosition(_selectPosition);
    let result: string = '';

    if (!_piece || !canMove) {
      result = 'Please select two valid positions 💜';

    } else if (_colorTurn !== pieceColor) {
      result = `${icon} It\'s not your turn ❌`;

    } else if (_piece && canMove) {
      result = `${icon} ${_selectPiece} to ${_selectPosition} ✅`;

      state.changeTurn();
    }

    console.log(`
    \tTurn: ${Icon[_colorTurn]}\n
    \tStatus: ${result}\n
    `);
  }
}

export default Status;
