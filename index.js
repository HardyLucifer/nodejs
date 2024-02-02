const http = require("http");
const fs = require("fs");
const port = process.env.PORT;
const headle = ()=>{
fs.readFile("fileName", "utf-8",
(err, data) => {
 if (err) {
     console.log(err);
 } else {
     res.writeHead (200, {
         "content-type" : " text/html" });
     res.write(data);
     res.end;
 };
}) ;
}

const server = http.createServer((req, res) => {
    if(req.url === "/"){
       handle("home.html", 200, req, res); 
    }else if (req.url === "/about"){
        handle("about.html", 200, req, res); 
    }else if (req.url === "/contact"){
        handle("contact.html", 200, req, res); 
    }else if (req.url === "/services"){
        handle("services.html", 200, req, res); 
    }else {
        handle("error.html", 404 , req, res); 
    }
});

server.listen (port, () =>{
    console.log(`I dont know how but its working.`);
});