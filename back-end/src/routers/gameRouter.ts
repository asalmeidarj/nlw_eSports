import express from 'express'
import * as gameController from '../controllers/gameController'

const router = express.Router()


router.get('/games', gameController.listAllGet)

router.post('/games', gameController.registerPost)

router.get('/games/:id/ads', gameController.findAllAdsbyGameIdGet)

router.post('/games/:id/ads', gameController.createAdPost)



export const gameRouter = router;