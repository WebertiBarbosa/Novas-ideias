// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static('public'))


// criei um rota /
// e capturo o pedido do cliente para responder
 server.get('/', function(req, res) {
     return res.sendFile(__dirname + '/index.html') 
 })

 server.get('/ideias', function(req, res) {
    return res.sendFile(__dirname + '/ideias.html')
})

 // liguei meu servidor na porta 4000
 server.listen(4000)


