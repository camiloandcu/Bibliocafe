import mongoose, { Schema, Document } from 'mongoose'

export type LibraryCafe = {
  name: string
  location?: string
  owner: string
  description?: string
  menu: string[]
  books: string[]
}

export interface LibraryCafeDocument extends LibraryCafe, Document<mongoose.Types.ObjectId> {
  updatedAt: Date
  createdAt: Date
}

const LibraryCafeSchema: Schema = new Schema<LibraryCafeDocument>(
  {
    name: { type: String, required: true },
    location: { type: String },
    owner: { type: String, required: true },
    description: { type: String },
    menu: { type: [String], required: true },
    books: { type: [String], required: true },
  },
  { timestamps: true },
)

const libraryCafeModel = mongoose.model<LibraryCafeDocument>(
  'LibraryCafe',
  LibraryCafeSchema,
)
export default libraryCafeModel
