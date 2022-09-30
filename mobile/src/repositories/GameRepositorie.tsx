import {useHttpRequest} from "../hooks/useHttpRequest";
import { IAd } from "../models/IAd";
import { IGame } from "../models/IGame";

const http = useHttpRequest;

const urlBase = "http://192.168.0.105:8080"

export async function findAll(): Promise<IGame[]> {
    const url = urlBase + "/games"
    const doc = await http.get(url)
    let games: IGame[] = await doc.data
    games = await loadNumberOfAdsInGames(games)
    return games 
}

async function loadNumberOfAdsInGames(games: IGame[]): Promise<IGame[]>{
    let arrayGames: IGame[] = []
    for(const game of games){
        let gameTemp = game
        gameTemp.numberAds = await getNumbersAdsByGameId(game._id)
        arrayGames.push(gameTemp)
    }
    return arrayGames
}

export async function getNumbersAdsByGameId(id: string): Promise<number> {
    const url = urlBase + `/games/${id}/number-ads`
    const num: number = await http.get(url).then( doc => doc.number)
    return num
}

export async function getAdsByGameId(id: string): Promise<IAd[]> {
    const url = urlBase + `/games/${id}/ads`
    const ads: IAd[] = await http.get(url)
    return ads
}
 