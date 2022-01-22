import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import api from './routers'
import auth from './middlewares/auth'

dotenv.config()

const app = express()
const port: number = parseInt(process.env.PORT) || 3000

// Settings
app.use(express.json())
app.use(helmet())

// Routers
app.use('/api/v1', api)

// Middleware
app.use(auth)

// Start server
app.listen(port, () =>
  console.log(`Server is running on the port ${port}.`)
)
