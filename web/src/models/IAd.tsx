// Cria uma interface representando um documento no MongoDB
export interface IAd {
    id?: String,
    name?: String;
    yearsPlaying?: Number;
    discord?: String;
    weekDays?: IWeekDays
    hourStart?: Number;
    hourEnd?: Number;
    useVoiceChannel?: Boolean;
    createdAd?: Date;
    gameId?: String;
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