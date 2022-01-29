import Board from '../../../app/Board'
import Piece from '../../../app/Piece'
import BlackPiece from '../../../app/Piece/BlackPiece'
import { EatBlackPiece } from '../../../app/Piece/Eat'
import { MoveWhitePiece } from '../../../app/Piece/Move'
import WhitePiece from '../../../app/Piece/WhitePiece'
import { Color, Icon } from '../../../app/Tools/enums'

class TestPiece extends Piece {
  constructor (position: string) {
    super(Color.WHITE, position)

    this._typeMove = new MoveWhitePiece()
    this._typeEat = new EatBlackPiece()
  }
}

const enemyPosition: string = 'c6'
const initialPosition: string = 'a4'

let piece: TestPiece
let board: Board

describe('Piece', () => {
  beforeEach(() => {
    board = new Board()
    piece = new TestPiece(initialPosition)

    board.addPiece({
      WhitePiece,
      BlackPiece
    })
  })

  it('default properties', () => {
    expect(piece.color).toEqual(Color.WHITE)
    expect(piece.position).toEqual(initialPosition)
    expect(piece.isKing).toEqual(false)
    expect(piece.icon).toEqual(Icon.WHITE)
  })

  it('should be a king piece', () => {
    const isKing: boolean = true

    piece.isKing = isKing

    expect(piece.isKing).toEqual(isKing)
  })

  it('should called the method canEat()', () => {
    const position: string = 'd7'
    const enemyPiece: BlackPiece = new BlackPiece(position)

    board.update(enemyPiece, enemyPosition)
    board.update(piece, 'b5')

    expect(piece.canEat(board, position)).toEqual(true)
  })

  it('should called the method canMove()', () => {
    const canMove: boolean = piece.canMove(board, 'b5')

    expect(canMove).toEqual(true)
  })

  it('should returns the targetPos', () => {
    const position: string = 'd7'
    const enemyPiece: BlackPiece = new BlackPiece(position)

    board.update(enemyPiece, enemyPosition)
    board.update(piece, 'b5')
    piece.canEat(board, position)

    expect(piece.targetPos).toEqual(enemyPosition)
  })
})
