import Graph from '../Graph';
import Tool from '../Tool';

const { keyPress } = new Tool();

class Menu {
  static init(options) {
    const lenOption = (options.length - 1);
    let index = 0;
    let showMenu = true;

    Graph.menu(index, options);

    keyPress((key, exit) => {
      switch (key) {
        case 'right':
          index = (index >= lenOption) ? 0 : ++index;
          break;

        case 'left':
          index = (index <= 0) ? lenOption : --index;
          break;

        case 'return':
          options[index].open(exit);
          showMenu = false;
          break;

        case 'escape':
          showMenu = true;

          if (index === 0) {
            Graph.gameOver();
            exit();
          }
          break;

        default:
          break;
      }

      if (showMenu) {
        Graph.menu(index, options);
      }
    });
  }
}

export default Menu;
