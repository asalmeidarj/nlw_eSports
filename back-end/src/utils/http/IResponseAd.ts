import { IAd } from "../../models/ad/IAd";
import { IResponseData } from "./IResponse";

export interface IResponseAd extends IResponseData{
    data?: IAd[]
}