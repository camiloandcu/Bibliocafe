import express from 'express'
import {
  listAllLibraryCafes,
  listLibraryCafesByLocation,
  listLibraryCafesByOwner,
  createLibraryCafe,
  updateLibraryCafe,
  deleteLibraryCafe,
  getLibraryCafeById
} from '../services/libraryCafe.services.js'

const libraryCafeRouter = express.Router()

libraryCafeRouter.get('/', async (req, res) => {
  const { sortBy, sortOrder, owner, location } = req.query
  const options = { sortBy, sortOrder }

  try {
    if (owner && location) {
      console.log('owner', owner, 'location', location)
      res
        .status(400)
        .json({ error: 'Cannot filter by both owner and location' }) // TODO: Better query and filtering handling
    } else if (owner) {
      if (typeof owner !== 'string') {
        // TODO: Could also accept an array of strings
        res.status(400).json({ error: 'Owner must be a string' })
        return void 0
      }
      const libraryCafes = await listLibraryCafesByOwner(
        owner as string,
        options,
      )
      res.json(libraryCafes)
    } else if (location) {
      if (typeof location !== 'string') {
        // TODO: Could also accept an array of strings
        res.status(400).json({ error: 'Location must be a string' })
        return void 0
      }
      const libraryCafes = await listLibraryCafesByLocation(
        location as string,
        options,
      )
      res.json(libraryCafes)
    } else {
      const libraryCafes = await listAllLibraryCafes(options)
      res.json(libraryCafes)
    }
  } catch (error) {
    console.error('Error fetching library cafes: ', error)
    res.status(500).end()
  }
})

libraryCafeRouter.get('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const libraryCafe = await getLibraryCafeById(id)
    if (libraryCafe === null) {
      res.status(404).end()
      return void 0
    }
    res.json(libraryCafe)
  } catch (error) {
    console.error('Error fetching library cafe: ', error)
    res.status(500).end()
  }
})

libraryCafeRouter.post('/', async (req, res) => {
  const libraryCafe = req.body

  try {
    const newLibraryCafe = await createLibraryCafe(libraryCafe)
    res.status(201).json(newLibraryCafe)
  } catch (error) {
    console.error('Error creating library cafe: ', error)
    res.status(500).end()
  }
})

libraryCafeRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const libraryCafe = req.body

  try {
    const updatedLibraryCafe = await updateLibraryCafe(id, libraryCafe)
    if (updatedLibraryCafe === null) {
      res.status(404).end()
      return void 0
    }
    res.json(updatedLibraryCafe)
  } catch (error) {
    console.error('Error updating library cafe: ', error)
    res.status(500).end()
  }
})

libraryCafeRouter.delete('/:id', async (req, res) => {
  const { id } = req.params

  try {
    const deletedLibraryCafe = await deleteLibraryCafe(id)
    if (deletedLibraryCafe === null) {
      res.status(404).end()
      return void 0
    }
    res.json(deletedLibraryCafe)
  } catch (error) {
    console.error('Error deleting library cafe: ', error)
    res.status(500).end()
  }
})

export default libraryCafeRouter