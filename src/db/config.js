const sqlite3 = require("sqlite3")
const {open} = require("sqlite") //só preciso da função open que ta ai dentro, pegou só a funçao open

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })
// driver é sqlite3, poderia ser mySQL ou postgree...
