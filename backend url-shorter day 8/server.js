const express = require("express");
const connect = require("./configs/db");
const shortId = require("shortid")
const createHttpError = require("http-errors")
const path = require("path")
const ShortUrl = require("./models/url.model")

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

app.get("/", async (req, res) => {
    res.render('index')
})
app.post("/", async (req, res, next) => {
    try {
        const { url } = req.body
        if (!url) {
            throw createHttpError.BadRequest("provid a valid url")
        }
        const UrlExists = await ShortUrl.findOne({ url })
        if (UrlExists) {
            res.render("index", { short_url: `http://localhost:7005/${UrlExists.shortId}` })
            return
        }
        const shortUrl = new ShortUrl({ url: url, shortId: shortId.generate() })
        const result = await shortUrl.save()
        res.render("index", { short_url: `http://localhost:7005/${result.shortId}` })
    } catch (error) {
        next(error)
    }
})
app.get("/:shortId",async(req,res,next)=>{
    try {
        const {shortId}=req.params
        const result=await ShortUrl.findOne({shortId})
        if(!result){
    throw createHttpError.NotFound("short url does not exits")
        }
        res.redirect(result.url)
    } catch (error) {
        next(error)
    }
   
})

app.use((req, res, next) => {
    next(createHttpError.NotFound())
})
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render("index", { error: err.message })
})


app.listen(7005, async () => {
    try {
        await connect()
        console.log("listing on port 7005")
    } catch (err) {
        console.log(err.message);
    }

})