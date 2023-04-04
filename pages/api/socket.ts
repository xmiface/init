import { Server } from "Socket.IO";

const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      socket.on("ping", (msg) => {
        socket.emit("pong", { value: "pong" });
        socket.broadcast.emit("pong", msg);
      });

      socket.on("disconnect", () => {
        console.log("disconnected ((");
      });
    });
  }

  res.end();
};

export default SocketHandler;
