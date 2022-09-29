import {useHttpRequest} from "../hooks/useHttpRequest";
import { IGame } from "../models/IGame";

const http = useHttpRequest;

const url = "http://192.168.0.105:8080/games"

export async function findAll(): Promise<IGame[]> {
    const doc = await http.get(url)
    const games: IGame[] = doc.data
    return games 
}
 