import Piece from '.';
import { Color } from '../Tools/enums';
import { EatWhitePiece } from './Eat';
import { MoveWhitePiece } from './Move';

class WhiteToken extends Piece {
  constructor(position: string) {
    super(Color.WHITE, position);

    this._typeEat = new EatWhitePiece();
    this._typeMove = new MoveWhitePiece();
  }
}

export default WhiteToken;
