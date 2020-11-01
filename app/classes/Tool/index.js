import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Tool {
  loop(range, callback) {
    [...Array(range).keys()].map((el) => callback(el));
  }

  get abc() {
    return 'abcdefgh';
  }

  space(spaces) {
    return ' '.repeat(spaces);
  }

  getPosition(position) {
    return ['abcdefgh'.search(position[0]), (8 - Number(position[1]))];
  }

  input(message, callback) {
    const recursiveAsyncReadLine = () => {
      rl.question(message, (data) => {
        if (data === 'exit') {
          return rl.close();
        }

        callback(data);
        recursiveAsyncReadLine();
      });
    };
    recursiveAsyncReadLine();
  }

  keyPress(callback) {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.on('keypress', (str, key) => callback(key.name, process.exit));
  }
}

export default Tool;
