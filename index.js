/*
 * Title: My NodeJS Template
 * Description: ' '.
 * Author: Forhad Hossain ( callbackMind )
 * Date: 12/11/23 
*/

const http = require('http');
const PORT = 3000;
const hostName = '127.0.0.1';

const server = http.createServer((req,res) => {
    res.end("Welcome to the nodeJS server");
});

server.listen(PORT, hostName, () =>{
    console.log(`server is running at http://${hostName}:${PORT}`);
});