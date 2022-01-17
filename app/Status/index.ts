import { Icon, Message } from '../Tools/enums';

class Status {
  public static display(state: any, message: Message) {
    let result: string;

    switch (message) {
      case Message.SUCCESS:
        result = `${state.icon} ${state._selectPiece} to ${state._selectPosition} ✅`;
        break;
  
      case Message.INVALID_POSITION:
        result = 'Please select two valid positions 💜';
        break;

      case Message.INVALID_TURN:
        result = `${state.icon} It\'s not your turn ❌`;
        break;

      case Message.INVALID_MOVE:
        result = 'invalid move ❌';
        break;

      default:
        result = '';
        break;
    }

    console.log(`
    \tTurn: ${Icon[state._colorTurn]}\n
    \tStatus: ${result}\n
    `);
  }
}

export default Status;
