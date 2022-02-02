import axios from 'axios'
import * as readline from 'readline'
import { ColumnPosition } from './enums'
import { typeFormatPosition } from './types'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Tool {
  static formatPosition (position: string, num: number = 0): typeFormatPosition {
    const [column, row]: string = position

    return {
      column: (parseInt(ColumnPosition[column]) - num),
      row: (parseInt(row) - num)
    }
  }

  static space (number: number): string {
    return ' '.repeat(number)
  }

  static async sendRequest (url: string, method: any, data: any = {}): Promise<any> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `token: ${process.env.AUTHORIZATION}`
    }

    return await axios({ method, url, data, headers })
  }

  static get request (): any {
    return {
      delete: (url: string, data: any) => this.sendRequest(url, 'delete', data),
      get: (url: string, data: any) => this.sendRequest(url, 'get', data),
      post: (url: string, data: any) => this.sendRequest(url, 'post', data),
      put: (url: string, data: any) => this.sendRequest(url, 'put', data)
    }
  }

  static range (number: number): number[] {
    return [...Array(number).keys()]
  }

  static cleanScreen (): void {
    console.clear()
  }

  static keyPress (callback: (key: string, exit: (status: number) => void) => void): void {
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
