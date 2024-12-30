import { describe, test, expect, beforeAll, afterAll } from '@jest/globals'
import { testDatabaseConnect, testDatabaseDisconnect } from '../__helpers__/testDatabaseConfig'
import libraryCafeModel, {
  LibraryCafe,
  LibraryCafeDocument,
} from '../db/models/libraryCafe.model'
import { faker } from '@faker-js/faker'

describe('LibraryCafe Model Testing', () => {
  beforeAll(async () => {
    await testDatabaseConnect()
  })

  afterAll(async () => {
    await libraryCafeModel.collection.drop()
    await testDatabaseDisconnect()
  })

  test('Creating with LibraryCafe Model', async () => {
    const libraryCafe: LibraryCafe = {
      name: faker.company.name(),
      location: faker.location.city(),
      owner: faker.person.fullName(),
      description: faker.lorem.sentence(),
      menu: [faker.lorem.word(), faker.lorem.word()],
      books: [faker.lorem.word(), faker.lorem.word()],
    }
    const createdLibraryCafe: LibraryCafeDocument =
      await libraryCafeModel.create(libraryCafe)
    expect(createdLibraryCafe).toMatchObject(libraryCafe)
    expect(createdLibraryCafe.createdAt).toBeInstanceOf(Date)
    expect(createdLibraryCafe.updatedAt).toBeInstanceOf(Date)
  })
})
