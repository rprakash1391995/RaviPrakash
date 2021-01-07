var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))

require('./mongoose/mongoose')
const Contact = require('./models/model')
app.use(express.urlencoded({extended:true}))
app.get("/", (req, res) => {
    res.render("index");
})

app.post('/client', async (req, res) => { 
        const { names, email, subject, message } = req.body

    try {
    const newDetails = new Contact({ names, email, subject, message })
        await newDetails.save()
        res.redirect('/')
    } catch (e) {
       console.log(e) 
    }

})
app.listen(port, () => {
    console.log('app running');
})