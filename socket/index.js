
const { Server } = require("socket.io")


const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000"
    }
})

io.on("connection", (socket) => {
    console.log("User Connection via Socket")
})