import app from './src/app.js'
const porta = 3000


//escultar a porta 3000
app.listen(porta,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${porta}`)
})
               