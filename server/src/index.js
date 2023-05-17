const http = require('http');
const characters = require('./utils/data.js');
const { type } = require('os');

http.createServer( function(request, response){ 
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url.includes('/rickandmorty/character')){
        const id = request.url.split('/').at(-1);
        const characterFound = characters.find((character) => character.id === +id);
        return response.writeHead(200,{'content-type': 'application/json'}).end(JSON.stringify(characterFound));
    }
}).listen(3001, 'localhost');