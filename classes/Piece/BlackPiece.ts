import { Color } from '../Tools/enums'
import { EatWhitePiece } from './Eat'
import { MoveBlackPiece } from './Move'
import Piece from '.'

class BlackToken extends Piece {
  constructor (position: string) {
    super(Color.BLACK, position)

    this._typeMove = new MoveBlackPiece()
    this._typeEat = new EatWhitePiece()
  }
}

export default BlackToken
