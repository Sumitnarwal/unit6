
const express = require("express")
const mongoose = require("mongoose")
const  connect  = require("./configgs/db")
const app = express()








app.listen(7006, async () => {
    try {
        await connect()
        console.log("listen port 7006")
    } catch (error) {
        console.log(error.message);
    }
})



