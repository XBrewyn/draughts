import BlackPiece from '../../../app/Piece/BlackPiece'
import { EatWhitePiece } from '../../../app/Piece/Eat'
import { MoveBlackPiece } from '../../../app/Piece/Move'
import { Color, Icon } from '../../../app/Tools/enums'

jest.mock('../../../app/Piece/Eat')
jest.mock('../../../app/Piece/Move')

const position: string = 'testPosition'
const piece: BlackPiece = new BlackPiece(position)

describe('Black Piece', () => {
  it('default properties', () => {
    expect(piece.color).toEqual(Color.BLACK)
    expect(piece.position).toEqual(position)
    expect(piece.isKing).toEqual(false)
    expect(piece.icon).toEqual(Icon.BLACK)
  })

  it('shoud call EatWhitePiece and MoveBlackPiece', () => {
    expect(EatWhitePiece).toBeCalled()
    expect(MoveBlackPiece).toBeCalled()
  })
})
