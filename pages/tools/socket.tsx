import { useEffect } from "react";
import io from "Socket.IO-client";
import { ClearTinyLayout } from "../../layouts/ClearTinyLayout";
let socket;

const socketInitializer = async () => {
  await fetch("/api/socket");
  socket = io();

  socket.on("connect", () => {
    console.log("connected");
  });

  socket.on("pong", (msg) => {
    console.log(msg);
  });
};

const Socket = (req, res) => {
  useEffect(() => void socketInitializer(), []);

  useEffect(() => {
    return () => socket.disconnect();
  }, []);

  return (
    <ClearTinyLayout
      links={[
        { title: "tools", path: "/tools" },
        { title: "socket", path: "/tools/socket" },
      ]}
    >
      <div className="">
        <button
          onClick={() => {
            console.log("gg");
            socket.emit("ping", { name: "Vladilen" });
          }}
        >
          socket
        </button>
      </div>
    </ClearTinyLayout>
  );
};

export default Socket;
