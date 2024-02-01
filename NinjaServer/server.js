const http = require('http');
const _ = require('lodash')


const server = http.createServer((req, res) => {
    const num = _.random(5, 20);
    console.log(num)

    const greet = _.once(() => {
        console.log('hello')
    })

    greet()
    greet()

    // console.log(req.url, req.method)

    //set header content type
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>hello, ninjas</p>')
    res.write('<p>hello again, ninjas</p>')
    res.end()
})

//call back function will run everytime there is a request to the server

server.listen(3001, 'localhost', () => {
    console.log('listening for request on port 3001')
})

//localhost 127.0.0.1 means listening for request on our own computer
//port# are like doors into a computer that host different programs
