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
  res.send(specCandy)
})

router.post('/', (req, res) => {
  const newSpecCandy = createSpecCandy(req.body)
  res.send(newSpecCandy)
})

router.put('/:id', (req, res) => {
  updateSpecCandy(req.params.id, req.body)
  res.send({ msg: `Specialty Candy ${req.params.id} Updated` })
})

router.delete('/:id', (req, res) => {
  deleteSpecCandy(req.params.id)
  res.send({ msg: `Specialty Candy ${req.params.id} Deleted` })
})

export default router
