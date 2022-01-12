import BlackToken from '../../Piece/BlackToken';
import { MoveBlackToken, MoveKingToken, MoveWhiteToken } from '../../Piece/Move';
import WhiteToken from '../../Piece/WhiteToken';

type TypePiece = WhiteToken | BlackToken;
type TypeMove = MoveWhiteToken | MoveBlackToken | MoveKingToken;

export {
  TypePiece,
  TypeMove
};
