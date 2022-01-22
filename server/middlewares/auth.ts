import { Status } from '../tools/enums'
import { typeRouter } from '../tools/types'

const auth: typeRouter = (req, res, next) => {
  const { headers: { authorization } } = req
  const { env: { AUTHORIZATION } } = process

  if (authorization !== AUTHORIZATION) {
    res.status(Status.UNAUTHORIZED).json({
      response: {
        message: 'UNAUTHORIZED',
        status: Status.UNAUTHORIZED
      }
    })

    return
  }

  next()
}

export default auth
