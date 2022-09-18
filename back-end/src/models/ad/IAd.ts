// Cria uma interface representando um documento no MongoDB
export interface IAd {
  id?: String,
  name?: String;
  yearsPlaying?: Number;
  discord?: String;
  weekDays?: JSON;
  hourStart?: Number;        // horas em minutos
  hourEnd?: Number;          // horas em minutos
  useVoiceChannel?: Boolean;
  createdAd?: Date;
  gameId?: String;
}

