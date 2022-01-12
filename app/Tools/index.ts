import * as readline from 'readline';
import { ColumnPosition } from './enums';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Tool {
  private constructor() {}

  static formatPosition(position: string, num: number = 0): number[] {
    const [column, row]: any = position;

    return [parseInt(ColumnPosition[column]) - num,  parseInt(row) - num];
  }

  static repeat(range: number, str: string): string {
    let repeat: string = '';

    [...Array(range)].forEach(() => repeat += str);

    return repeat;
  }

  static space(range: number): string {
    return this.repeat(range, ' ');
  }

  static cleanScreen(): void {
    console.clear();
  }

  static keyPress(callback: (key: string, exit: () => void) => void): void {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', (str, key) => callback(key.name, process.exit));
  }

  static input(question: string, callback: (res: string) => void): void {
    ((function recursiveAsyncReadLine() {
      rl.question(question, (res: string) => {
        callback(res);
        recursiveAsyncReadLine();
      });
    })());
  }
}

export default Tool;
