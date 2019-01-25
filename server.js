const express = require('express')
const cors = require('cors')
const fs = require("fs")
const path = require('path')

// Create Express App
const app = express()

app.use(cors())
app.use(express.static('public'))

//
app.get('/', function(req, res) {
    console.log(path.join(__dirname, 'index.html'))
    res.sendFile(path.join(__dirname, 'index.html'));
})

var server = app.listen(process.env.PORT || 5000, function() {console.log('********************** Server listening on port %s *', server.address().port);})
