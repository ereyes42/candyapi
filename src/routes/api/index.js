import { Router } from 'express'

import specCandies from './specCandies'

const router = Router()

router.get('/', (req, res) => {
  res.send({ msg: 'Inside API Endpoints' })
})

router.use('/specCandies', specCandies)

export default router
