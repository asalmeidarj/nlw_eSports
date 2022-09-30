// Cria uma interface representando um documento no MongoDB
export interface IAd {
    _id?: string,
    name?: string;
    yearsPlaying?: number;
    discord?: string;
    weekDays?: IWeekDays
    hourStart?: number;
    hourEnd?: number;
    useVoiceChannel?: boolean;
    createdAd?: Date;
    gameId?: string;
  }
  
  // Interface criada para representar dias que usuários estão ativos
  export interface IWeekDays {
    mon: boolean,
    tue: boolean,
    wed: boolean,
    thu: boolean,
    fri: boolean,
    sat: boolean,
    sun: boolean,
  }