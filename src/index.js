const express = require('express')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

let app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(favicon('./assets/Icon.ico'))
app.use(express.static(__dirname + '/assets'));

const fetch = require('node-fetch')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/mark', (req, res) => {
    res.render('mark', {status: '', message: ''})
})

app.post('/mark', (req, res) => {
    console.log(req.body.spam)
    res.render('mark', {status: 'Marked', message: req.body.spam})
})

app.get('/check', (req, res) => {
    res.render('check', {status: '', message: ''})
})

app.post('/check', (req, res) => {
    console.log(req.body.spam)
    res.render('check', {status: '∞ people have marked this message as Spam', message: req.body.spam})
})

app.listen(8080)
