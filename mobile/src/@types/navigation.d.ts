import { IGame } from "../models/IGame";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined,
            game: IGame,
        }
    }
}