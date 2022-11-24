
const express = require("express")
const {connection} = require("./config/db")


const app = express();





const PORT = 8080;

app.listen(PORT, async () => {
    try{
        await connection;
        console.log("Connected to db")
    }
    catch(err){
        console.log("Error connnecting to DB")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})