import { Icon } from '../Tools/enums';

class Status {
  public static display(state: any) {
    let status: string = 'Invalid move ❌';

    if (!state._board.isPosition(state._selectPosition, state._selectPiece)) {
      status = 'Please select two valid positions 💜';

    } else if (state._canMove) {
      status = `${state._piece.icon} ${state._selectPiece} to ${state._selectPosition} ✅`;
      state._canMove = false;
    }

    console.log(`
    \tTurn: ${Icon[state._colorTurn]}\n
    \tStatus: ${status}\n
    `);
  }
}

export default Status;
