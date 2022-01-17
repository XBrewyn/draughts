import { Icon } from "../Tools/enums";

class Status {
  public static display(status: any = {}) {
    const { icon = '', color }: any = status._piece || {};
    const isValidSelectPos: boolean = status._board.isPosition(status._selectPosition);
    let result: string = '';

    if (!status._piece || !isValidSelectPos) {
      result = 'Please select two valid positions 💜';

    } else if (status._colorTurn !== color) {
      result = `${icon} It\'s not your turn ❌`;

    } else if (status._piece && isValidSelectPos) {
      result = `${icon} ${status._targetPosition} to ${status._selectPosition} ✅`;

      status.changeTurn();
    }

    console.log(`
    \tTurn: ${Icon[status._colorTurn]}\n
    \tStatus: ${result}\n
    `);
  }
}

export default Status;
