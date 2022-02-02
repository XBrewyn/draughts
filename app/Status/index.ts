import { Icon } from '../../Tools/enums'

class Status {
  public static display (state: any): void {
    let status: string = 'Invalid move ❌'

    if (!state.board.isPosition(state.piecePos, state.newPos)) {
      status = 'Please select two valid positions 💜'
    } else if (state.canMove || state.canEat) {
      status = `${state.piece.icon} ${state.piecePos} to ${state.newPos} ✅`
      state.canMove = false
      state.canEat = false
    }

    console.log(`
    \tTurn: ${Icon[state.turn]}\n
    \tStatus: ${status}\n
    `)
  }
}

export default Status
