import { Request, Response } from 'express';
import { IAd } from '../models/ad/IAd';
import AdService from '../services/AdServices';


const adService = new AdService();

export const listAllGet = async (req: Request, res: Response) => {
    let datas =  await adService.findAll()
    return res.status(200).send(datas);
}

export const findDiscordByIdGet = async (req: Request, res: Response) => {
    let id = req.params.id
    let data = await adService.findDiscordById(id)
    return res.status(200).send(data)
}

export const findAllAdsbyGameIdGet = async (req: Request, res: Response) => {
    let id = req.params.id
    let data = await adService.findAllByGameId(id)
    return res.status(200).send(data)
}

