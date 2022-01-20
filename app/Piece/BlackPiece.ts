import Piece from '.';
import { Color } from '../Tools/enums';
import { MoveBlackPiece } from './Move';
import { EatWhitePiece } from './Eat';

class BlackToken extends Piece {
  constructor(position: string) {
    super(Color.BLACK, position);

    this._typeMove = new MoveBlackPiece();
    this._typeEat = new EatWhitePiece();
  }
}

export default BlackToken;
