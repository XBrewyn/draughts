import Board from '../../Board'
import { MoveStrategy } from '../../interfaces'
import { canMove } from '../validator'

const STEP_MOVE = 1

class MoveWhitePiece implements MoveStrategy {
  public canMove (board: Board, piecePos: string, newPos: string): boolean {
    return canMove(board, piecePos, newPos, STEP_MOVE)
  }
}

class MoveBlackPiece implements MoveStrategy {
  public canMove (board: Board, piecePos: string, newPos: string): boolean {
    return canMove(board, piecePos, newPos, -STEP_MOVE)
  }
}

class MoveKingPiece implements MoveStrategy {
  public canMove (_board: Board, _piecePos: string, _newPos: string): boolean {
    return false
  }
}

export {
  MoveWhitePiece,
  MoveBlackPiece,
  MoveKingPiece
}
