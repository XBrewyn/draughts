import { Icon } from '../Tools/enums'

class Status {
  public static display (state: any): void {
    let status: string = 'Invalid move ❌'

    if (!state._board.isPosition(state._piecePos, state._newPos)) {
      status = 'Please select two valid positions 💜'
    } else if (state._canMove || state._canEat) {
      status = `${state._piece.icon} ${state._piecePos} to ${state._newPos} ✅`
      state._canMove = false
      state._canEat = false
    }

    console.log(`
    \tTurn: ${Icon[state._colorTurn]}\n
    \tStatus: ${status}\n
    `)
  }
}

export default Status
