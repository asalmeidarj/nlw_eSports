import express from 'express'
import { Express } from 'express'
import loadRouters from '../utils/loadRouters'

//Configuração do Express
const app: Express = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Carregamento das rotas
loadRouters(app);

const customExpress = app;
export default customExpress;
