import _ from 'colors';
import Tool from '../Tool';

const { abc, space } = new Tool();

class Graph {
  static menu(position, options) {
    let render = '';

    options.forEach(({ name, color = 'white' }, index) => {
      const selecter = (position === index) ? '►' : '';
      const newLine = (index !== (options.length - 1)) ? '\n' : '';
      const column = selecter ? '│ │' : ' │ │';
      const number = `${index + 1}. `;
      const fourSpaces = space(4);

      render += `│ │${fourSpaces}${selecter}${space(2)}${number}${name[color]}${space(18 - name.length)}${column}${newLine}${fourSpaces}`;
    });

    console.clear();
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
  `);
  }

  static board(board, turn) {
    const repeatLine = (str) => str.repeat(7);
    const fiveSpaces = space(5);
    const tenSpaces = space(10);
    const columns = abc.toUpperCase().replace(/\w/g, (str) => str + fiveSpaces);

    let render = `${tenSpaces}${columns}\n${space(2)}${fiveSpaces}┌${repeatLine('─────┬')}─────┐\n`;

    board.forEach((elem, index) => {
      const numberLeft = (8 - index);
      const numberRight = `│${space(1)}${numberLeft}\n${space(2)}`;

      render += `${fiveSpaces}${numberLeft}${space(1)}`;

      elem.forEach(([piece,, pos]) => {
        render += `│${space(1)}${piece ? `${piece.icon}${space(1)}` : pos}${space(2)}`;
      });

      if (index !== (board.length - 1)) {
        render += `${numberRight}${fiveSpaces}├${repeatLine('─────┼')}─────┤\n`;
      } else {
        render += `${numberRight}${fiveSpaces}└${repeatLine('─────┴')}─────┘\n${tenSpaces}${columns}`;
      }
    });

    // console.clear();
    console.log(`\n\n${render}\n\n`);
    console.log(`${fiveSpaces}\tTurn: ${turn === 'white' ? '⬤' : '⬤'.black}\n`);
  }

  static author() {
    console.clear();
    console.log(`
           __ 
          (  )
           ||
         []||  ,----.___
         __||_/___      '.
        / O||    /|       )
       /   ""   / /   =._/
      /________/ /
      |________|/

  Name: Brewyn, Espinal
  Email: Brewyn@outlook.com

  Back: [ESC]
  `);
  }

  static gameOver() {
    console.clear();
    console.log(`
           __ 
          (  )
           ||
         []||  ,----.___
         __||_/___      '.
        / O||    /|       )
       /   ""   / /   =._/
      /________/ /
      |________|/

       Game Over
  `);
  }
}

export default Graph;
