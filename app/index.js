import App from './classes/Main';
import Menu from './classes/Menu';
import Graph from './classes/Graph';

const app = new App();

Menu.init([
  {
    name: 'PLAY GAME',
    color: 'red',
    open: () => app.start()
  },
  {
    name: 'AUTHOR',
    color: 'green',
    open: () => Graph.author()
  },
  {
    name: 'EXIT',
    color: 'cyan',
    open: (close) => close()
  },
]);
