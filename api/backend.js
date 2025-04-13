var http = require('http');
var url = require('url');
var Express = require('express');
var cors = require('cors')

var app = Express()
app.use(cors());

app.listen(5038, () => {console.log('connection success')})

app.get('/api', (req, res) => {
    res.send({g: 'a'})
})

app.get('/api/api', (req, res) => {
    res.send({ggg: 'kkk'})
})



//http.createServer(function (req, res) {
    //res.write('{ a: 1 }')
    //res.end(); //end the response
  //}).listen(5038);