const express = require('express');
const QuestionController = require('./controllers/QuestionController')
const route = express.Router()   /*diz que route guarda todas as router de express*/
const RoomController = require('./controllers/RoomController')

route.get('/',(req,res) => res.render("index" , {page: "enter-room"}))  /* criar uma rota, como se fosse o link */ 
route.get('/create-pass' , (req,res ) => res.render('index', {page: "create-pass"})) 



//Formato que o formulario de dentro da modal tem que passar a informação(não pega sennha por aqui!!)
route.post ('/create-room' , RoomController.create )
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)



//route.post('/room/:room/:question/:action'  //rota para mandar informações do q foi feito no formulario /:signfica que nao sei oq vai vim ainda

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action' ,QuestionController.index )






module.exports = route