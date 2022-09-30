import { IAd } from "../models/IAd";
import { IGame } from "../models/IGame";

import * as gameRepositorie from "../repositories/GameRepositorie";

export async function findAll(): Promise<IGame[]> {
    return await gameRepositorie.findAll();
}

export async function findAdsByGameId(id: string): Promise<IAd[]> {
    return await gameRepositorie.getAdsByGameId(id);
}