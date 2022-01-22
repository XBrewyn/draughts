import * as readline from 'readline'
import { ColumnPosition } from './enums'
import { formatPosition } from './types'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Tool {
  static formatPosition (position: string, num: number = 0): formatPosition {
    const [column, row]: string = position

    return {
      column: (parseInt(ColumnPosition[column]) - num),
      row: (parseInt(row) - num)
    }
  }

  static space (number: number): string {
    return ' '.repeat(number)
  }

  static range (number: number): number[] {
    return [...Array(number).keys()]
  }

  static cleanScreen (): void {
    console.clear()
  }

  static keyPress (callback: (key: string, exit: () => void) => void): void {
    readline.emitKeypressEvents(process.stdin)
    process.stdin.setRawMode(true)
    process.stdin.on('keypress', (_, key: { name: string }) => callback(key.name, process.exit))
  }

  static input (question: string, callback: (res: string) => void): void {
    ((function recursiveAsyncReadLine () {
      rl.question(question, (res: string) => {
        callback(res)
        recursiveAsyncReadLine()
      })
    })())
  }
}

export default Tool
