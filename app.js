const express = require('express')
const app = express()

app.get('/', function (req, res) { 
    res.send({ message: "サーバー動いてるよ"});
})

app.listen(3000)