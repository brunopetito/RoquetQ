const Database = require("./config")

const initDb  = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
        
        )`);
        //tabela das questões
        await db.exec(`CREATE TABLE questions(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            read INT,
            room INT
            )`);
            
            await db.close()
    }
}
initDb.init();  

//criei as tabelas no await db.exec
//initDb está fazendo o comando da funçao initDb

