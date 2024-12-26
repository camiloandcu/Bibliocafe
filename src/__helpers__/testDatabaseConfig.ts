import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongoServer: MongoMemoryServer

export async function testDatabaseConnect() {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  const connection = mongoose.connect(uri)
  return connection
}

export async function testDatabaseDisconnect() {
  await mongoose.disconnect()
  await mongoServer.stop()
}
