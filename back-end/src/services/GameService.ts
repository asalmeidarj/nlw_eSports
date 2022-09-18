import { IGame } from "../models/game/IGame";
import GameRepositorie from "../repositories/GameRepositorie";
import { IResponseGame } from "../utils/http/IResponseGame";
import { ResponseGame } from "../utils/http/ResponseGame";

export default  class GameService {

    private gameRepositorie: GameRepositorie;

    constructor(){
       this.gameRepositorie = new GameRepositorie();
    }

    async save(obj: IGame): Promise<IResponseGame> {

        if(!this.isValid(obj)){
            return ResponseGame.requestInvalid(obj);
        }

        let data = await this.gameRepositorie.save(obj)

        return ResponseGame.requestCreatedSuccess(data)
    }

    async findAll(): Promise<IResponseGame>{
        let datas = await this.gameRepositorie.findAll()

        let response = ResponseGame.requestOk()

        response.data = datas

        return response
    }


    private isValid(game: IGame): boolean {
        const bannerUrl = game.bannerUrl;
        const title = game.title;

        if(!title || !bannerUrl){
            return false
        }

        return true
    }
}