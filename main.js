
  const express = require('express')
  const app = express()
  const PORT = process.env.PORT || 8080
  app.get('/', (req, res)=>{
    return res.status(200).send({mensagen: 'Welcame your app'})
  })
  app.listen(PORT, ()=>{
    console.log('your app running in the port %s', PORT);
  })

