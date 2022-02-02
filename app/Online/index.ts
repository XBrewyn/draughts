import Game from '../Game'

class Online extends Game {
  constructor (settings: any) {
    super()
    console.log('online')
  }

  protected start (): void {}
}

export default Online
