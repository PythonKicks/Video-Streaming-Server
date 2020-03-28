const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const app = require('./app');
const fs = require('fs');
const PORT = process.env.PORT || 1234;
const server = http.createServer({
}, app);
const createWSServer = require('./wsServer');

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}!`);
});

createWSServer(server);
