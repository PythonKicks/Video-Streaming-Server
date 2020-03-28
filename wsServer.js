const WebSocketServer = require('websocket').server;

module.exports = function createWSServer(server) {
    wsServer = new WebSocketServer({
        httpServer: server
    });

    wsServer.on('request', function(req) {
        let connection = req.accept(null, req.origin);
    
        connection.on('message', function(message) {
            if (message.type === 'utf8') {
                console.log('Received message: '+message.utf8Data);
                connection.sendUTF(JSON.stringify({
                    clientMessage: message.utf8Data,
                    message: 'Received message!'
                }, null, 4));
            }
        });
    
        connection.on('close', function(connection) {
            console.log((new Date()) + 'Disconnected from '+connection.remoteAddress);
        });
    });
}