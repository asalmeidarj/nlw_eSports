//Importar módulos necessários para aplicação
import customExpress from './config/customExpress';
import * as dotenv from 'dotenv';

// Abilitando o uso do dotenv
dotenv.config()

const PORT = process.env.PORT


// Inciando o Express configurado
const app = customExpress;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT)
})

