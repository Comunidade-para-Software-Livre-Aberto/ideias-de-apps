import express from 'express';
const ReciveRoute = express.Router();
ReciveRoute.use(express.json());

//lista as receitas
ReciveRoute.get('/', (req, res) => {
  res.send({msg:'Lista as receitas'})
})

//lista receita pelo id
ReciveRoute.get('/:id', (req, res) => {
  res.send({msg:'Lista uma receita'})
})

//adicionar nova receita
ReciveRoute.post('/', (req, res) => {
  res.send({msg:'Nova receita criada'})
})

//editar receita
ReciveRoute.put('/', (req, res) => {
  res.send({msg:'Receita editada'})
})

//deletar receitas
ReciveRoute.delete('/', (req, res) => {
  res.send({msg:'Receita deletada'})
})


export default ReciveRoute;