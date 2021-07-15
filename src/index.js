const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

let app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(favicon('/Users/neev/Documents/Nodejs/RightMessageWeb/src/assets/Icon.ico'))
app.use(express.static(__dirname + '/assets'));

const fetch = require('node-fetch')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(8080)