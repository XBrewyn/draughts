import Piece from '.';
import { Color } from '../Tools/enums';
import { MoveBlackToken } from './Move';

class BlackToken extends Piece {
  constructor(position: string) {
    super(Color.BLACK, position);

    this._typeMove = new MoveBlackToken();
  }
}

export default BlackToken;
