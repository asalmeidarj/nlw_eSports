import express from 'express';

import { Router, Request, Response } from 'express';

const PORT = 8080

const app = express();

const route = Router()

app.use(express.json())

route.get('/teste-conexao', (req: Request, res: Response) => {
  res.json({ message: 'Servidor conectado!' })
})

app.use(route)


app.listen(PORT, () => console.log('server rodando na porta ' + PORT))
