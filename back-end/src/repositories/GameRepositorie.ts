import gameModel from "../models/game/gameModel";
import { IGame } from "../models/game/IGame";


export default class GameRepositorie {

    async save(game: IGame): Promise<IGame> {
        return await gameModel.create(game);
    }

    async findAll(): Promise<IGame[]> {
        let datas = await gameModel.find()
            .then(docs => {
                return docs
            })
            .catch((err) => {
                console.log(err)
                return []
            })
       
        return datas
    }
}