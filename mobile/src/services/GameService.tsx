import { IGame } from "../models/IGame";

import * as gameRepositorie from "../repositories/GameRepositorie";

export async function findAll(): Promise<IGame[]> {
    return await gameRepositorie.findAll();
}