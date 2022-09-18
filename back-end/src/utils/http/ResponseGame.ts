import { IGame } from "../../models/game/IGame";
import { IResponseGame } from "./IResponseGame";
import { Message } from "./Message";

export abstract class ResponseGame {

    static requestOk(): IResponseGame {
        let response: IResponseGame = {}

        response.status = 200
        response.message = Message.sucess

        return response
    }

    static requestCreatedSuccess(obj: IGame){

        let response: IResponseGame = {}
        response.status = 201
        response.message = Message.created
        response.data = [obj]

        return response
    }

    static requestInvalid(obj: IGame): IResponseGame {

        let response: IResponseGame = {}

        response.status = 422
        response.message = Message.invalidPost
        response.data = [obj]

        return response
    }

}