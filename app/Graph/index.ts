import { ColumnPosition } from '../../Tools/enums'
import { typeOption } from '../../Tools/types'
import Board from '../Board'
import Piece from '../Piece'
import Tool from '../../Tools'

const SPACE: {
  TWO: string,
  FOUR: string,
  FIVE: string,
  SEVEN: string,
  TEN: string
} = {
  TWO: Tool.space(2),
  FOUR: Tool.space(4),
  FIVE: Tool.space(5),
  SEVEN: Tool.space(7),
  TEN: Tool.space(10)
}

class Graph {
  static board (boardInstance: Board): void {
    const board: any[][] = boardInstance.get()
    const len: number = board.length
    const repeat: (str: string) => string = (str: string) => str.repeat(len - 1)
    const column: string = 'ABCDEFGHIJ'.replace(/\w/g, (letter) => letter + SPACE.FIVE)
    const lines: string = `├${repeat('─────┼')}─────┤\n`
    let render: string = `${SPACE.TEN}${column}\n${SPACE.SEVEN}┌${repeat('─────┬')}─────┐\n`

    for (let row: number = (len - 1); row >= 0; row--) {
      const numberRow: number = (row + 1)

      board[row].forEach((piece: Piece | null, index: number) => {
        const position: string = boardInstance.isSquareBlack(row, index)
          ? `${ColumnPosition[index + 1]}${numberRow + SPACE.TWO}`
          : SPACE.FOUR

        const renderPiece: string = `│ ${piece ? ` ${piece.icon} ` : `${position}`}`
        const spaces: string = (numberRow > 9) ? SPACE.FOUR : SPACE.FIVE
        const isFirstColumn: boolean = (index === 0)

        render += (isFirstColumn)
          ? `${spaces}${numberRow} ${renderPiece}`
          : renderPiece
      })

      render += (row !== 0)
        ? `│ ${numberRow}\n${SPACE.SEVEN + lines}`
        : `│ ${numberRow}\n`
    }

    render += `${SPACE.SEVEN}└${repeat('─────┴')}─────┘\n${SPACE.TEN + column}`

    Tool.cleanScreen()
    console.log(`\n\n${render}\n\n`)
  }

  static menu (select: number, options: typeOption): void {
    let render: string = ''

    options.forEach(({ name }: any, index: number) => {
      const selecter: string = (select === index) ? '►' : ''
      const newLine: string = (index !== (options.length - 1)) ? '\n' : ''
      const column: string = selecter ? '│ │' : ' │ │'
      const number: string = `${index + 1}. `

      render += `│ │${SPACE.FOUR + selecter + SPACE.TWO + number + name + Tool.space(18 - name.length)}${column + newLine + SPACE.FOUR}`
    })

    Tool.cleanScreen()
    console.log(`
    ┌────────────────────────────────┐
    │ MENU                           │
    ├────────────────────────────────┤
    │ Select option                  │
    │ ┌────────────────────────────┐ │
    ${render}       
    │ └────────────────────────────┘ │
    ├────────────────────────────────┤
    │    SELECT: ◄ ►     EXIT: ESC   │
    └────────────────────────────────┘
  `)
  }

  static control (): string {
    return `
          __ 
        (  )
          ||
        []||  ,----.___
        __||_/___      '.
      / O||    /|       )
      /   ""   / /   =._/
      /________/ /
      |________|/
    `
  }

  static notAvailable (): void {
    Tool.cleanScreen()
    console.log(`${Graph.control()}
        Feature
    
          Not
    
       Available 😔

    Back: [ESC]
    `)
  }

  static author (): void {
    Tool.cleanScreen()
    console.log(`${Graph.control()}

    Name: Brewyn Frederick
    LastName: Espinal Mercado
    Email: Brewyn@outlook.com
    Github: XBrewyn

    Back: [ESC]
    `)
  }

  static gameOver (): void {
    Tool.cleanScreen()
    console.log(`${Graph.control()}

       GAME OVER
    `)
  }
}

export default Graph
