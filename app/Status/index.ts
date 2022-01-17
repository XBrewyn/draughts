import { Icon } from "../Tools/enums";

class Status {
  public static display(state: any = {}) {
    const { _selectPosition, _board, _colorTurn, _targetPosition, _piece }: any = state;
    const { icon = '', color = '', position = '' }: any = _piece || {}; 
    const isValidSelectPos: boolean = _board.isPosition(_selectPosition);
    let result: string = '';

    if (!position || !isValidSelectPos) {
      result = 'Please select two valid positions 💜';

    } else if (_colorTurn !== color) {
      result = `${icon} It\'s not your turn ❌`;

    } else if (position && isValidSelectPos) {
      result = `${icon} ${_targetPosition} to ${_selectPosition} ✅`;

      state.changeTurn();
    }

    console.log(`
    \tTurn: ${Icon[_colorTurn]}\n
    \tStatus: ${result}\n
    `);
  }
}

export default Status;
