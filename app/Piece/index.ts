import Board from '../Board';
import { EatStrategy, MoveStrategy } from '../interfaces';
import { Color, Icon } from '../Tools/enums';
import { EatKingPiece } from './Eat';
import { MoveKingPiece } from './Move';

abstract class Piece {
  private _color: Color;
  private _position: string;
  private _isKing: boolean = false;
  private _icon : string;
  protected _typeMove: MoveStrategy;
  protected _typeEat: EatStrategy;

  constructor(color: Color, position: string) {
    this._color = color;
    this._icon = Icon[color];
    this._position = position;
  }

  public get color(): Color {
    return this._color;
  }

  public get icon(): string {
    return this._icon;
  }

  public get position(): string {
    return this._position;
  }

  public get isKing(): boolean {
    return this._isKing;
  }

  public set isKing(value: boolean) {
    this._isKing = value;
  }

  public set position(value: string) {
    this._position = value;
  }

  public canMove(board: Board, newPos: string): boolean {
    return this._typeMove.canMove(board, this._position, newPos);
  }

  public canEat(board: Board, newPos: string): boolean {
    return this._typeEat.canEat(board, this._position, newPos);
  }

  public get enemyPos(): string {
    return this._typeEat.enemyPos;
  }

  public changePieceBehavior(typeMove: MoveKingPiece, typeEat: EatKingPiece) {
    this._typeMove = typeMove;
    this._typeEat = typeEat;
  }
}

export default Piece;
