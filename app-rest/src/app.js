const express = require('express')
const app = express()
const porta = 3000

//criar rota padrão ou raiz
app.get('/',(req,res)=>{
    res.send('Hello World!')
})

//escultar a porta 3000
app.listen(porta,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${porta}`)
})
