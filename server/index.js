import { Socket } from "socket.io-client";

const io = new Socket("htttp://localhost:3000" , {
});

io.on("connect", () => {
    console.log("Connected to server"  , Socket.id);
});


