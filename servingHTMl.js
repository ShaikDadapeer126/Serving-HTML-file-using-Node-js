// Serving HTML file using Node.js
const http=require('http')
const fs=require('fs')
const filecontent=fs.readFileSync('hi.html')

const server=http.createServer((req, res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(filecontent)
});

server.listen(80,'127.0.1.1',()=>{
    console.log("listining on port 80 ...")
});