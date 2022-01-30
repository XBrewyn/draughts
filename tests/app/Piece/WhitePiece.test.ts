import WhitePiece from '../../../app/Piece/WhitePiece'
import { EatBlackPiece } from '../../../app/Piece/Eat'
import { MoveWhitePiece } from '../../../app/Piece/Move'
import { Color, Icon } from '../../../app/Tools/enums'

jest.mock('../../../app/Piece/Eat')
jest.mock('../../../app/Piece/Move')

const position: string = 'testPosition'
const piece: WhitePiece = new WhitePiece(position)

describe('Black Piece', () => {
  it('default properties', () => {
    expect(piece.color).toEqual(Color.WHITE)
    expect(piece.position).toEqual(position)
    expect(piece.isKing).toEqual(false)
    expect(piece.icon).toEqual(Icon.WHITE)
  })

  it('shoud call EatWhitePiece and MoveBlackPiece', () => {
    expect(EatBlackPiece).toBeCalled()
    expect(MoveWhitePiece).toBeCalled()
  })
})
