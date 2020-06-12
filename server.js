// usei o express para criar e configurar meu servidor
const express = require("express")
const server = express()

const ideas = [
    {
        img:'https://www.flaticon.com/premium-icon/icons/svg/3015/3015401.svg',
        title: 'Cursos de Programação',
        category: 'Estudo',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url:'https://rocketseat.com.br'
    },

    {
        img:'https://image.flaticon.com/icons/svg/2927/2927549.svg',
        title: 'Exercícios',
        category: 'Saúde',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url:'https://rocketseat.com.br'
    },

    {
        img:'https://www.flaticon.com/premium-icon/icons/svg/2981/2981976.svg',
        title: 'Meditação',
        category: 'Mentalidade',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url:'https://rocketseat.com.br'
    },

    {
        img:'https://image.flaticon.com/icons/svg/3043/3043892.svg',
        title: 'Karaokê',
        category: 'Diversão em Família',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        url:'https://rocketseat.com.br'
    },
]


//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static('public'))

//configuração do nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('views', {
    express: server,
    noCache: true, // boolean
} )

// criei um rota /
// e capturo o pedido do cliente para responder
 server.get('/', function(req, res) {

    const reverseIdeas = [...ideas].reverse()

    let lastideas = []
    for (let idea of reverseIdeas) {
        if (lastideas.length < 2) {
            lastideas.push(idea)
        }
    }
    
      
    return res.render('index.html', { ideas: lastideas }) 
 })

 server.get('/ideias', function(req, res) {

    const reverseIdeas = [...ideas].reverse()

    return res.render('ideias.html', { ideas: reverseIdeas})
})

 // liguei meu servidor na porta 4000
 server.listen(4000)


