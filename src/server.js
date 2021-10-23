const express = require('express')     /*tem que chamar desse jeito*/

const route = require('./route')      /* para o node que vai ser rodado no server saber da existencia das rotas*/

const path = require ('path')
const server = express()           /* iniciando o server*/


server.set('view engine','ejs') /*definindo a view engine como ejs*/

server.use(express.static("public")) /*express tenha acesso a public */

server.set('views', path.join(__dirname, 'views'))   /* path pega o caminho da pagina do projeto e join junta o path com dirname (src/) com o views(pasta) */

server.use(express.urlencoded({extended:true}))


server.use(route)   /* express começou a usar o route*/

server.listen(3000, ()=> console.log("RODANDO"))    /*rodando servidor na porta 3000 , chamei arrow function só para avisar que está rodando*/


