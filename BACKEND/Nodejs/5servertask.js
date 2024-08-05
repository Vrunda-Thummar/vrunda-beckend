// HTTP Module

const http = require('http')

const server1 = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.write('Welcome to NodeJs server-1');
    res.end('<h2>Ended</h2>')

})

server1.listen(1122, () => {
    console.log(`Server Start at http://localhost:1122`);
})

const server2 = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.write('Welcome to NodeJs server-2');
    res.end('<h2>Ended</h2>')
})

server2.listen(2233, () => {
    console.log(`server atart at http://localhost:2233`);
})

const server3 = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.write('Welcome to NodeJs server-3');
    res.end('<h2>Ended</h2>')
})

server3.listen(3344, () => {
    console.log(`server atart at http://localhost:3344`);
})

const server4 = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.write('Welcome to NodeJs server-4');
    res.end('<h2>Ended</h2>')
})

server4.listen(4455, () => {
    console.log(`server atart at http://localhost:4455`);
})

const server5 = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html")
    res.write('Welcome to NodeJs server-5');
    res.end('<h2>Ended</h2>')
})

server5.listen(5566, () => {
    console.log(`server atart at http://localhost:5566`);
})


// netstat -ano | findstr :5566 (copied PID number)
// taskkill /PID 20336 /F
