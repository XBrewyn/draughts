import Graph from '../Graph'
import Tool from '../../Tools'
import { typeOption } from '../../Tools/types'

class Menu {
  public static display (settings: any): void {
    const previousMenus: any[] = []
    let options: typeOption = settings
    let index: number = 0
    let showMenu: boolean = true

    Graph.menu(index, options)

    Tool.keyPress((key: string, exit: (status: number) => void) => {
      const lenMenu: number = (options.length - 1)
      const setting: { subMenu, display, canBack } = options[index]

      switch (key) {
        case 'right':
          index = (index >= lenMenu) ? 0 : (index + 1)
          break

        case 'left':
          index = (index <= 0) ? lenMenu : (index - 1)
          break

        case 'return':
          if (setting.canBack) {
            options = previousMenus[(previousMenus.length - 1)]
            index = 0
            previousMenus.pop()
          }

          if (setting.subMenu) {
            previousMenus.push(options)
            options = setting.subMenu
            index = 0
          }

          if (showMenu && setting.display) {
            setting.display(exit)
            showMenu = !!setting.subMenu
          }

          break

        case 'escape':
          showMenu = true
          break
      }

      if (showMenu) {
        Graph.menu(index, options)
      }
    })
  }
}

export default Menu
