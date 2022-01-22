import * as express from 'express'
import routers from './settings'

const api = express.Router()

routers.forEach(({ method, path, request }) =>
  api[method](path, request)
)

export default api
