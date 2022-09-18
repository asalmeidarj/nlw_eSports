import express from 'express'
import * as adsController from '../controllers/adController'

const router = express.Router()


router.get('/ads', adsController.listAllGet)

router.get('/ads/:id/discord', adsController.findDiscordByIdGet)


export const adsRouter = router;
