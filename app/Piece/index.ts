import { MoveStrategy } from '../interfaces';
import { Color, Icon } from '../Tools/enums';
import { MoveKingToken } from './Move';

abstract class Piece {
  private _color: Color;
  private _currentPosition: string;
  private _isKing: boolean;
  private _icon : string;
  protected _typeMove: MoveStrategy;

  constructor(color: Color, position: string) {
    this._color = color;
    this._icon = Icon[color];
    this._currentPosition = position;
    this._isKing = false;
  }

  public get color(): Color {
    return this._color;
  }

  public get icon(): string {
    return this._icon;
  }

  public get position(): string {
    return this._currentPosition;
  }

  public get isKing(): boolean {
    return this._isKing;
  }

  public set isKing(value: boolean) {
    this._isKing = value;
  }

  public set position(value: string) {
    this._currentPosition = value;
  }

  public canMove(selectPosition: string): boolean {
    return this._typeMove.canMove(this._currentPosition, selectPosition);
  }

  public changeMoveBehavior(typeMove: MoveKingToken) {
    this._typeMove = typeMove;
  }
}

export default Piece;
