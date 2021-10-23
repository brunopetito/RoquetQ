const Database = require("../db/config")

module.exports = {
    async create(req, res){
        const db =  await Database()
        const pass = req.body.password
        let isRoom = true

        while(isRoom){
            //gerar o numero da sala 
            for(var i = 0; i<6; i++){
                i == 0 ? roomId = Math.floor(Math.random()*10).toString():
                roomId += Math.floor(Math.random()*10).toString()
            }


            //Verificar se esse id já existe

          const roomsExistIds = await db.all(`SELECT id FROM rooms`)
          isRoom = roomsExistIds.some(roomsExistId => roomsExistId === roomId)      //vai olhar de sala em sala,  para logo na primeira que for igual e retorna true.


          // inserir no banco de dado
          if(! isRoom){
            await db.run(`INSERT INTO rooms (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            )`)
        } 
    }

           await db.close()
        res.redirect(`/room/${roomId}`)
    },

    async open(req,res){
        const db = await Database()
        const roomId = req.params.room;  //pegando o número da room
        const questions =  await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 0` )
        const questionsRead =  await db.all(`SELECT * FROM questions WHERE room = ${roomId} and read = 1`)
        let isNoQuestions
        if(questions.length == 0){
            if(questionsRead.length == 0){
                isNoQuestions = true
            }
        }


        res.render('room',{roomId: roomId, questions: questions , questionsRead: questionsRead , isNoQuestions :isNoQuestions})
    },


    //usando a rota criada e linkada no href do formulario 
    enter(req , res) {
        const roomId = req.body.roomId

        res.redirect(`/room/${roomId}`)

    }
}
