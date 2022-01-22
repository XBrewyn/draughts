import Piece from '.'
import { Color } from '../Tools/enums'
import { EatBlackPiece } from './Eat'
import { MoveWhitePiece } from './Move'

class WhiteToken extends Piece {
  constructor (position: string) {
    super(Color.WHITE, position)

    this._typeMove = new MoveWhitePiece()
    this._typeEat = new EatBlackPiece()
  }
}

export default WhiteToken
