import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import libraryCafeRouter from './routes/libraryCafe.routes.js'

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1/libraryCafes', libraryCafeRouter)

app.get('/', (_, res) => {
  res.send('Hello World!')
})

export default app
