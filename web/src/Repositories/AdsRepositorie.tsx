import {useHttpRequest} from "../hooks/useHttpRequest";
import { IAd } from "../models/IAd";

const http = useHttpRequest;

const urlBase = "http://localhost:8080"

export async function saveAds(obj: IAd): Promise<IAd> {
    const url = urlBase + `/games/${obj.gameId}/ads`
    const res = await http.post(obj, url)
    return res
}
