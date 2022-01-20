import Board from '../../Board'
import { EatPiece, EatStrategy } from '../../interfaces'
import { Color } from '../../Tools/enums'
import { eatPiece } from '../validator'

const STEP_MOVE = 2

class EatBlackPiece implements EatStrategy {
  enemyPos: string

  public canEat (board: Board, piecePos: string, newPos: string) {
    const { canEat, targetPos }: EatPiece = eatPiece(board, piecePos, newPos, Color.BLACK, STEP_MOVE)

    this.enemyPos = targetPos

    return canEat
  }
}

class EatWhitePiece implements EatStrategy {
  enemyPos: string

  public canEat (board: Board, piecePos: string, newPos: string) {
    const { canEat, targetPos }: EatPiece = eatPiece(board, piecePos, newPos, Color.WHITE, -STEP_MOVE)

    this.enemyPos = targetPos

    return canEat
  }
}

class EatKingPiece implements EatStrategy {
  enemyPos: string

  public canEat (board: Board, piecePos: string, newPos: string): boolean {
    return false
  }
}

export {
  EatWhitePiece,
  EatBlackPiece,
  EatKingPiece
}
