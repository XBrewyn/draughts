import Board from '../Board';
import { EatStrategy, MoveStrategy } from '../interfaces';
import { Color, Icon } from '../Tools/enums';
import { EatKingPiece } from './Eat';
import { MoveKingPiece } from './Move';

abstract class Piece {
  private _color: Color;
  private _currentPosition: string;
  private _isKing: boolean = false;
  private _icon : string;
  protected _typeMove: MoveStrategy;
  protected _typeEat: EatStrategy;

  constructor(color: Color, position: string) {
    this._color = color;
    this._icon = Icon[color];
    this._currentPosition = position;
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

  public canMove(board: Board, selectPosition: string): boolean {
    return this._typeMove.canMove(board, this._currentPosition, selectPosition);
  }

  public canEat(board: Board, selectPosition: string): boolean {
    return this._typeEat.canEat(board, this._currentPosition, selectPosition);
  }

  public changePieceBehavior(typeMove: MoveKingPiece, typeEat: EatKingPiece) {
    this._typeMove = typeMove;
    this._typeEat = typeEat;
  }
}

export default Piece;
