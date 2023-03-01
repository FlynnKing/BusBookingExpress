require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
    user:process.env.USER_db,
    host:process.env.HOST_db,
    database:process.env.DATABASE_db,
    password:process.env.PASSWORD_db,
    port:process.env.DBPORT_db,
})

/** db connection to db, end is insert into CRUD functions */
function db_connection(){
    pool.connect((err)=>{
        if (err){ throw err }
    })
}

function db_close(){
    pool.end((err)=>{
        if (err){ throw err }
    })
}

module.exports = {pool, db_connection, db_close}