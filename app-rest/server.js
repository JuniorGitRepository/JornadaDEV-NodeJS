import app from './src/app.js'
const PORTA = 3000


//escultar a porta 3000
app.listen(PORTA,()=>{
    console.log(`Servidor rodando no endereço http://localhost:${PORTA}`)
})
               