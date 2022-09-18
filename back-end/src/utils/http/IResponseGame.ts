import { IGame } from "../../models/game/IGame";
import { IResponseData } from "./IResponse";

export interface IResponseGame extends IResponseData{
    data?: IGame[]
}