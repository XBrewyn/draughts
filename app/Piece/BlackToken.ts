import Piece from '.';
import { Color } from '../Tools/enums';
import { MoveBlackPiece } from './Move';
import { EatBlackPiece } from './Eat';

class BlackToken extends Piece {
  constructor(position: string) {
    super(Color.BLACK, position);

    this._typeEat = new EatBlackPiece();
    this._typeMove = new MoveBlackPiece();
  }
}

export default BlackToken;
