import Graph from '../Graph';
import Tool from '../Tools';

class Menu {
  public static display(options: any[]) {
    const lenOption: number = (options.length - 1);
    let index: number = 0;
    let showMenu = true;

    Graph.menu(index, options);

    Tool.keyPress((key: string, exit: () => void) => {
      switch(key) {
        case 'right':
          index = (index >= lenOption) ? 0 : (index + 1);
          break;

        case 'left':
          index = (index <= 0) ? lenOption : (index - 1);
          break;

        case 'return':
          if (showMenu) {
            options[index].display(exit);
          }

          showMenu = false;
          break;

        case 'escape':
          showMenu = true;
          break
      }

      if (showMenu) {
        Graph.menu(index, options);
      }
    });
  }
}

export default Menu;
