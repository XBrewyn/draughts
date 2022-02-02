import * as dotenv from 'dotenv'
import Graph from './app/Graph'
import Menu from './app/Menu'
import { Option } from './Tools/enums'
import Offline from './app/Offline'
import Tool from './Tools'

dotenv.config()

Menu.display([
  {
    name: Option.PLAY_OFFLINE,
    display: () => new Offline()
  },
  {
    name: Option.ONLINE,
    subMenu: [
      {
        name: Option.CREATE_ROOM,
        display: () => {
          Tool.cleanScreen()
          console.log('SEARCH_ROOM')
        }
      },
      {
        name: Option.JOIN_ROOM,
        display: () => {
          Tool.cleanScreen()
          console.log('JOIN_ROOM')
        }
      },
      {
        name: Option.BACK,
        canBack: true
      }
    ]
  },
  {
    name: Option.VS_CPU,
    display: () => Graph.notAvailable()
  },
  {
    name: Option.AUTHOR,
    display: () => Graph.author()
  },
  {
    name: Option.EXIT,
    display: (exit: (status: number) => void) => {
      Graph.gameOver()
      exit(1)
    }
  }
])
