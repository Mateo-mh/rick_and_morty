const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
});

    // if(request.url.includes('/rickandmorty/character')){
    //     const id = request.url.split('/').at(-1);
    //     const characterFound = characters.find((character) => character.id === +id);
    //     return response.writeHead(200,{'content-type': 'application/json'}).end(JSON.stringify(characterFound));
    // }