const http = require("http")

const server  = http.createServer((req, res) =>{
    res.writeHead(200, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({
       message: "Aplicação node"
    }));

})
server.listen(4001, ()=> console.log("server running in 4001"))