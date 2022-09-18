import { Schema } from 'mongoose';
import connection from '../../infrastructures/connection'
import { IGame } from './IGame';

const connect = connection();

// Cria um esquema correspondendo a interface IGame
const gameSchema = new Schema<IGame>({
  title: { type: String, required: true },
  bannerUrl: { type: String, required: true }
});

// Cria um model
const gameModel = connect.model<IGame>('Games', gameSchema);

export default gameModel;