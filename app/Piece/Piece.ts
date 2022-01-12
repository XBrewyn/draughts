import { Color } from '../Tools/enums';
import { TypeMove } from '../Tools/types';
import { MoveKingToken } from './Move';

abstract class Piece {
  private _color: Color;
  private _currentPosition: string;
  private _isKing: boolean;
  private _symbol : string;
  protected _typeMove: TypeMove;

  constructor(color: Color, position: string) {
    this._color = color;
    this._symbol = (color === Color.BLACK) ? '⚫' : '⚪';
    this._currentPosition = position;
    this._isKing = false;
  }

  public get color(): Color {
    return this._color;
  }

  public get symbol(): string {
    return this._symbol;
  }

  public get position(): string {
    return this._currentPosition;
  }

  public set position(newPosition: string) {
    this._currentPosition = newPosition;
  }

  public canMove(selectPosition: string): boolean {
    return this._typeMove.canMove(this._currentPosition, selectPosition);
  };

  public changeMoveBehavior(typeMove: MoveKingToken) {
    this._typeMove = typeMove;
    this._isKing = true;
  }
}

export default Piece;