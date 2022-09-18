import { routers } from "../../routers/routers";
import { Express } from "express";

export default function loadRouters(app: Express): void {
    for(const router of routers){
        app.use('/', router)
    }
}