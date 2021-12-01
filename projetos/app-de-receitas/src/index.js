import express  from 'express';

import ReciveRoute from './routes/ReciveRoute.js'

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({msg:'Bem vindo ao app de receitas!'})
})
app.use('/recive', ReciveRoute);


app.listen(3000, () => {
  console.log('listening on http://localhost:3000')
})