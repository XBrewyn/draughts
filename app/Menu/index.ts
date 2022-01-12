import Graph from "../Graph";
import Tool from "../Tools";

class Menu {
  private _index: number = 0;
  private _lenOption: number = 0;
  private _options: any[] = [];
  private _showMenu = true;

  constructor(options: any[]) {
    this._lenOption = (options.length - 1);
    this._options = options;
  }

  private graphMenu() {
    Graph.menu(this._index, this._options); 
  }

  public display() {
    this.graphMenu();

    Tool.keyPress((key: string, exit: any) => {
      switch(key) {
        case 'right':
          this._index = (this._index >= this._lenOption) ? 0 : ++this._index;
          break;

        case 'left':
          this._index = (this._index <= 0) ? this._lenOption : --this._index;
          break;

        case 'return':
          if (this._showMenu) {
            this._options[this._index].display(exit);
          }

          this._showMenu = false;
          break;

        case 'escape':
          this._showMenu = true;
          break
      }

      if (this._showMenu) {
        this.graphMenu();
      }
    });
  }
}

export default Menu;
