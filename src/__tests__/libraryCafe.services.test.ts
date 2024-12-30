import { describe } from '@jest/globals'
import {
  testDatabaseConnect,
  testDatabaseDisconnect,
} from '../__helpers__/testDatabaseConfig'
import libraryCafeModel, {
  LibraryCafe,
  LibraryCafeDocument,
} from '../db/models/libraryCafe.model'
import {
  createLibraryCafe,
  deleteLibraryCafeById,
  getLibraryCafeById,
  listAllLibraryCafes,
  listLibraryCafesByLocation,
  listLibraryCafesByOwner,
  updateLibraryCafeById,
} from '../services/libraryCafe.services'
import libraryCafeMocks from '../__mocks__/libraryCafe.json'
import mongoose from 'mongoose'

describe('LibraryCafe Services Testing', () => {
  beforeAll(async () => {
    await testDatabaseConnect()
  })

  afterAll(async () => {
    await libraryCafeModel.collection.drop()
    await testDatabaseDisconnect()
  })

  test('Create LibraryCafe', async () => {
    const libraryCafe: LibraryCafe = {
      name: 'The Quiet Quill',
      location: '123 Literary Lane, Biblioville',
      owner: 'Amelia Penwright',
      description:
        'A cozy cafe for book lovers with an extensive collection of classics and a menu of artisan teas and pastries.',
      menu: [
        'Espresso',
        'Chai Latte',
        'Blueberry Muffin',
        'Avocado Toast',
        'Matcha Tea',
      ],
      books: [
        'Pride and Prejudice by Jane Austen',
        '1984 by George Orwell',
        'To Kill a Mockingbird by Harper Lee',
        'The Great Gatsby by F. Scott Fitzgerald',
      ],
    }
    const createdLibraryCafe: LibraryCafeDocument =
      await createLibraryCafe(libraryCafe)
    expect(createdLibraryCafe).toMatchObject(libraryCafe)
    expect(createdLibraryCafe.createdAt).toBeInstanceOf(Date)
    expect(createdLibraryCafe.updatedAt).toBeInstanceOf(Date)
  })

  const sampleLibraryCafes: LibraryCafe[] = libraryCafeMocks as LibraryCafe[]

  let createdLibraryCafes: LibraryCafeDocument[]

  beforeEach(async () => {
    await libraryCafeModel.deleteMany({})
    createdLibraryCafes = await Promise.all(
      sampleLibraryCafes.map(createLibraryCafe),
    )
  })

  test('List all LibraryCafes', async () => {
    const libraryCafes = await listAllLibraryCafes()
    expect(libraryCafes).toHaveLength(sampleLibraryCafes.length)
  })

  test('Should return LibraryCafe sorted by createdAt in descending order by default', async () => {
    const libraryCafes = await listAllLibraryCafes()
    const sortedLibraryCafes = createdLibraryCafes.sort(
      (a, b) => b.createdAt.getDate() - a.createdAt.getDate(),
    )
    expect(
      libraryCafes.map((libraryCafe) => libraryCafe.createdAt.getDate()),
    ).toEqual(
      sortedLibraryCafes.map((libraryCafe) => libraryCafe.createdAt.getDate()),
    )
  })

  test('List LibraryCafes by owner', async () => {
    const owner = 'Sophia Binder'
    const libraryCafes = await listLibraryCafesByOwner(owner)
    expect(libraryCafes).toHaveLength(1)
    expect(libraryCafes[0].owner).toBe(owner)
  })

  test('List LibraryCafes by location', async () => {
    const location = '456 Fiction Road, Storytown'
    const libraryCafes = await listLibraryCafesByLocation(location)
    expect(libraryCafes).toHaveLength(1)
    expect(libraryCafes[0].location).toBe(location)
  })

  test('Should return LibraryCafe by id', async () => {
    const libraryCafe = createdLibraryCafes[0]
    const foundLibraryCafe = await getLibraryCafeById(
      libraryCafe._id.toString(),
    )
    expect(foundLibraryCafe).toMatchObject(libraryCafe.toObject())
  })

  test('Should return null if LibraryCafe is not found', async () => {
    const libraryCafeId = new mongoose.Types.ObjectId().toString()
    const foundLibraryCafe = await getLibraryCafeById(libraryCafeId)
    expect(foundLibraryCafe).toBeNull()
  })

  test('Should update LibraryCafe by id', async () => {
    const libraryCafe = createdLibraryCafes[0]
    const updateFields = {
      name: 'The Silent Scribe',
    }
    const updatedDocument = (await updateLibraryCafeById(
      libraryCafe._id.toString(),
      updateFields,
    )) as LibraryCafeDocument
    expect(updatedDocument.name).toBe(updateFields.name)
  })

  test('Should delete LibraryCafe by id', async () => {
    const libraryCafe = createdLibraryCafes[0]
    await deleteLibraryCafeById(libraryCafe._id.toString())
    const deletedLibraryCafe = await libraryCafeModel.findById(libraryCafe._id)
    expect(deletedLibraryCafe).toBeNull()
  })
})
