import { Schema } from 'mongoose';
import { IAd } from './IAd';
import connection from '../../infrastructures/connection'

const connect = connection();

const adsSchema = new Schema<IAd>({
  name: { type: String, required: true },
  yearsPlaying: { type: Number, required: true },
  createdAd: { type: Date, default: Date.now() },
  discord: { type: String, required: true },
  hourStart: { type: Number, required: true },
  hourEnd: { type: Number, required: true} ,
  useVoiceChannel: { type: Boolean, required: true },
  weekDays: { type: JSON, required: true },
  gameId: { type: String}
});

const adModel = connect.model<IAd>('Ads', adsSchema);

export default adModel;