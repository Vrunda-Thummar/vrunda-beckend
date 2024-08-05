// url module

const http = require('http');

const data = [
    {
        id:1, name:'a', age: 11 
    },
    {
        id:2, name:'b', age: 22
    },
    {
        id:3, name:'c', age:33
    },
    {
        id:4, name:'d', age:44
    },
    {
        id:5, name:'e', age:55
    }
]

const server = http.createServer();

server.on("request", (req, res) => {
    // console.log(req.url);
    let items = req.url.splite("/");
    console.log(items);
    if(items[1] === "user"){
        res.setHeader("Content-type", "text/html");
        res.write('<h2>Welcome to user page</h2>');
        res.end();
    }
    else if(items[1] === "admin"){
        res.setHeader("Content-type", "text/html");
        res.write('<h2>Welcome to user page</h2>');
        res.end();
    }
    else if(items[1] === "friends"){
        res.setHeader("Content-type", "application/json");
        if(items.length === 3){
            let friIndex = +items[2]
        }
        res.write('<h2>Welcome to user page</h2>');
        res.end();
    }
})