import { IAd } from "../models/ad/IAd";
import AdRepositorie from "../repositories/AdRepositorie";

export default class AdService {

    private adRepositorie = new AdRepositorie()

    async save(obj: IAd) {
        return await this.adRepositorie.save(obj)
    }

    async findAll(): Promise<IAd[]>{
        return await this.adRepositorie.findAll()
    }

    async findDiscordById(id: String): Promise<IAd>{
        return  await this.adRepositorie.findDiscorById(id)
    }

    async findAllByGameId(id: String): Promise<IAd[]>{
        return  await this.adRepositorie.findAllByGameId(id)
    }

    async getNumberAdsByGameId(id: string): Promise<Number>{
        return 0
    }
}