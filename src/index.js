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
    let spam = req.body.spam
    console.log(spam.split('\n').join('lb'))
    fetch('http://3.6.40.9:2002/mark', {method: 'POST', headers: { message: req.body.spam }})
    .then(res => res.json())
    .then(json => {
        res.render('mark', {status: json.message, message: req.body.spam})
    })
})

app.get('/check', (req, res) => {
    res.render('check', {status: '', message: ''})
})

app.post('/check', (req, res) => {
    console.log(req.body.spam)
    fetch('http://3.6.40.9:2002/fetch', {method: 'POST', headers: { message: req.body.spam }})
    .then(res => res.json())
    .then(json => {
        res.render('check', {status: json.message, message: req.body.spam})
    })
})

app.listen(8080)
