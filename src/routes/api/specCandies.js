import { Router } from 'express'

import {
  getSpecCandies,
  getSpecCandy,
  createSpecCandy,
  updateSpecCandy,
  deleteSpecCandy,
} from '../../models/specCandies'

const router = Router()

router.get('/', (req, res) => {
  const specCandies = getSpecCandies()
  res.send(specCandies)
})

router.get('/:id', (req, res) => {
  const specCandy = getSpecCandy(req.params.id)
  if (specCandy) {
    res.send(specCandy)
  }
  res.status(404).send({ msg: 'Specialty Candy not found' })
})

router.post('/', (req, res) => {
  const newSpecCandy = createSpecCandy(req.body)
  if (newSpecCandy) {
    res.send(newSpecCandy)
  }
  res.status(400).send({ msg: 'Bad request' })
})

router.put('/:id', (req, res) => {
  const updatedSpecCandy = updateSpecCandy(req.params.id, req.body)
  if (updatedSpecCandy) {
    res.send(updatedSpecCandy)
  }
  res.status(404).send({ msg: 'Specialty Candy not found' })
})

router.delete('/:id', (req, res) => {
  const deleted = deleteSpecCandy(req.params.id)
  if (deleted) {
    res.send({ msg: `Specialty Candy ${req.params.id} Deleted` })
  }
  res.status(404).send({ msg: 'Speciality Candy not found' })
})

export default router
