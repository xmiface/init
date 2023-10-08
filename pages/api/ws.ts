import Server from "../../service/ws";
import type { NextApiRequest, NextApiResponse } from "next";

let counter = 3;

const SocketHandler = (req, res) => {
    if (!res.socket.server.io) {
        console.log('*First use, starting Socket.IO');
        const io = new Server(res.socket.server);

        io.on('connection', (socket) => {
            console.log(`Socket ${socket.id} connected.`);
            io.emit('message', counter)

            socket.on('increment', (message) => {
                counter++;
                io.emit('message', counter);
            });

            socket.on('disconnect', () => {
                console.log(`Socket ${socket.id} disconnected.`);
            });
        });
        res.socket.server.io = io;
    }
    res.end();
}

export default SocketHandler