// HTTP Module

const http = require('http')

// const server = http.createServer((req, res) => {
//     res.write('Welcome to NodeJs');
//     res.setHeader("dummy" , "hello");
//     res.setHeader("Content-type", "application/json");
//     res.setHeader("Content-type", "text/html");
//     res.end('<h1>Ended</h1>')

// })

const server = http.createServer();
server.on("request", (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.write('Welcome to NodeJs');
    res.setHeader("dummy" , "hello");
    res.setHeader("Content-type", "application/json");
    res.end('<h1>Ended</h1>')
})

server.listen(2304, () => {
    console.log(`Server Start at http://localhost:2304`);
})