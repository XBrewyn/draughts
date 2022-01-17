import Piece from '.';
import { Color } from '../Tools/enums';
import { MoveWhiteToken } from './Move';

class WhiteToken extends Piece {
  constructor(position: string) {
    super(Color.WHITE, position);

    this._typeMove = new MoveWhiteToken();
  }
}

export default WhiteToken;
