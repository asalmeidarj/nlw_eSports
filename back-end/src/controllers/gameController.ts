import { Request, Response } from 'express';
import { IAd } from '../models/ad/IAd';
import { IGame } from '../models/game/IGame';
import AdService from '../services/AdServices';

import GameService from '../services/GameService';

const gameService = new GameService();

const adService = new AdService();

export const registerPost = async (req: Request, res: Response) => {
    
    const game: IGame = req.body;

    const doc =  await gameService.save(game)

    const status = doc.status ? doc.status : 500

    res.status(status).send(doc.data)
}

export const createAdPost = async (req: Request, res: Response) => {
    
    const id = req.params.id

    const ad: IAd = req.body;
    ad.gameId = id

    const data =  await adService.save(ad)

    res.status(200).send(data)
}

export const listAllGet = async (req: Request, res: Response) => {
    const docs = await gameService.findAll()
    return res.status(200).send(docs);
}

export const findAllAdsbyGameIdGet = async (req: Request, res: Response) => {
    const gameId = req.params.id;

    const datas = await adService.findAllByGameId(gameId);

    return res.status(200).send(datas)
}


