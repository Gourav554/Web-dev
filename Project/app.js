const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.static('public'));
app.use(express.json());
let userMap = {};
io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.id);
    console.log('Total connected users: ' + io.engine.clientsCount);
    socket.on('newuser', async ({ socketId, name }) => {
        let client = [];
        let sockets = await io.fetchSockets();
        sockets.forEach((c) => {
            if (userMap[c.id]) {
                clients.push({
                    id: c.id,
                    name: userMap[c.id]
                })
            }
        });

        socket.emit('useradded', {
            msg: 'User added successfully',
            username: userMap[socket.id],
            clients,
            clientCount: clients.length
        });
        socket.broadcast.emit('newuser', {
            msg: 'New user joined',
            clients,
            clientCount: clients.length
        });
    });
    socket.on('newmessage', ({socketId, msg}) => {
       io.emit('msgreceived', {
        msg,
        username: userMap[socketId],
        socketId: socket.id,
        clientCount: io.engine.clientsCount
       })
    })
})

server.listen(3000);
