import app from './app.js'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js'

dotenv.config()

try {
  await connectDB()
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
} catch(err) {
  console.error('Error connecting to DB: ',err)
}
