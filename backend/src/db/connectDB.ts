import mongoose from 'mongoose'

export function connectDB() {
  const DATABASE_URL = process.env.DATABASE_URL

  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL is missing in env')
  }

  mongoose.connection.on('open', () => {
    console.info('Succesfully connected to database: ', DATABASE_URL)
  })

  mongoose.connection.on('error', (err) => {
    console.error('Error connecting to database: ', err)
  })

  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
