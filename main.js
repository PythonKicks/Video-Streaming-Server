const https = require('https');
const http = require('http');
const app = require('./app');
const fs = require('fs');
const PORT = process.env.PORT || 1234;
const server = http.createServer({
    // key: fs.readFileSync(__dirname+'/ssl/server.key'),
    // cert: fs.readFileSync(__dirname+'/ssl/server.cert')
}, app);

server.listen(PORT, function() {
    console.log(`Server running on port ${PORT}!`);
});