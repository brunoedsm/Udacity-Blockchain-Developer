/*
  Instância dos componentes necessários para execução da aplicação em API/HTTP
*/
const express = require('express');
const app = express();
const jsonP = require('body-parser');
const Block = require('./block');
const Blockchain = require('./blockchain');
const chain = new Blockchain();

/*
 INIT
*/
app.listen(8000, () => console.log('API executando na porta 8000'))
app.use(jsonP.json())
app.get('/', (req, res) => res.status(404).json({
  "status": 404,
  "message": "URLs válidas: POST/[block] ou GET/block/{BLOCK_HEIGHT}"
}));

/*
 API GET   
*/
app.get('/block/:height', async (req, res) => {
    try {
      const response = await chain.getBlock(req.params.height)
      res.send(response)
    } catch (error) {
      res.status(404).json({
        "status": 404,
        "message": "Bloco não encontrado"
      })
    }
  });
/*
 API POST
*/
  app.post('/block', async (req, res) => {
    if (req.body.body === '' || req.body.body === undefined) {
      res.status(400).json({
        "status": 400,
        message: "Nenhum bloco enviado como parâmetro"
      })
    }
    
    await chain.addBlock(new Block(req.body.body))
    const height = await chain.getBlockHeight()
    const response = await chain.getBlock(height)
  
    res.send(response)
  });