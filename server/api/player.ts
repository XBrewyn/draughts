import { Status } from '../tools/enums'
import { typeRouter } from '../tools/types'

const player: typeRouter = (req, res) => {
  res.status(Status.SUCCESS).json({
    name: 'hello world'
  })
}

export default player
