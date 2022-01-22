import Piece from '../../../classes/Piece'
import { Color } from '../../../classes/Tools/enums'

class TestPiece extends Piece {}

const position: string = 'testPos'
const pieceBlack: TestPiece = new TestPiece(Color.BLACK, position)
const pieceWhite: TestPiece = new TestPiece(Color.WHITE, position)

describe('Piece', () => {
  describe('White', () => {
    test('should be a color white', () => {
      expect(pieceWhite.color).toBe(Color.WHITE)
    })

    test('should have a position', () => {
      expect(pieceBlack.position).toBe(position)
    })
  })

  describe('Black', () => {
    test('should be a color black', () => {
      expect(pieceBlack.color).toBe(Color.BLACK)
    })

    test('should have a position', () => {
      expect(pieceBlack.position).toBe(position)
    })
  })
})
