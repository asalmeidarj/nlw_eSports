import adModel from "../models/ad/adModel";
import { IAd } from "../models/ad/IAd";


export default class AdRepositorie {

    async save(obj: IAd): Promise<IAd> {
        return await adModel.create(obj);
    }

    async findAll(): Promise<IAd[]> {
        let datas = await adModel.find()
            .then(docs => {
                return docs
            })
            .catch((err) => {
                console.log(err)
                return []
            })
       
        return datas
    }

    async findDiscorById(id: String): Promise<IAd> {
        const datas = await adModel.find({_id: id})

        const data: IAd = {
            discord: datas[0].discord
        }
        return data
    }

    async findAllByGameId(id: String): Promise<IAd[]> {
        const datas = await adModel.find({gameId: id})
        return datas
    }

    async getNumberAdsByGameId(id: String): Promise<Number> {
        const datas = await this.findAllByGameId(id)
        const num = datas.length
        return num
    }
}