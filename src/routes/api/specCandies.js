import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send({ msg: 'Get Specialty Candies' })
})

router.get('/:id', (req, res) => {
  res.send({ msg: `Getting Specialty Candy ${req.params.id}` })
})

router.post('/', (req, res) => {
  res.send({ msg: 'Creating a Specialty Candy' })
})

router.put('/:id', (req, res) => {
  res.send({ msg: `Updating Specialty Candy ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
  res.send({ msg: `Deleting Specialty Candy ${req.params.id}` })
})

export default router
