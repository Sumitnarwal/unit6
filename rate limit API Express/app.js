
const express = require("express")
const app = express()

const posts = require("./posts")
const rateLimit = require("express-rate-limit")


const limiter = rateLimit({
    max: 10,
    windowMs: 600000
})

app.get("/posts", limiter, (req, res) => {
    
    res.send({
        status: "Success",
        posts: posts
    })
})

app.listen(5500, () => console.log("listtening 5500"))