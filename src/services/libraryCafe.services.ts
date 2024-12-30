import libraryCafeModel, { LibraryCafe } from '../db/models/libraryCafe.model'
import { SortOrder } from 'mongoose'

export async function createLibraryCafe(libraryCafe: LibraryCafe) {
  const createdLibraryCafe = await libraryCafeModel.create(libraryCafe)
  return createdLibraryCafe
}

async function listLibraryCafes(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' as SortOrder },
) {
    return await libraryCafeModel.find(query).sort({ [sortBy]: sortOrder })
}

export async function listAllLibraryCafes(options = {}) {
  return await listLibraryCafes({}, options)
}

export async function listLibraryCafesByOwner(owner: string, options = {}) {
  return await listLibraryCafes({ owner }, options)
}

export async function listLibraryCafesByLocation(location: string, options = {}) {
  return await listLibraryCafes({ location }, options)
}

export async function getLibraryCafeById(id: string) {
  return await libraryCafeModel.findById(id)
}

export async function updateLibraryCafeById(id: string, libraryCafe: Partial<LibraryCafe>) {
  return await libraryCafeModel.findByIdAndUpdate(id, libraryCafe, { new: true })
}

export async function deleteLibraryCafeById(id: string) {
  return await libraryCafeModel.findByIdAndDelete(id)
}
