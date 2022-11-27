
const { Server } = require("socket.io")



const io = new Server(9000, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = [];
const addUser = (userData, socketId) => {

    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId)
}

// connecting to IO
io.on("connection", (socket) => {
    console.log("User Connection via Socket")
    socket.on("addUsers", userData => {
        addUser(userData, socket.id);
        io.emit("getUsers", users)
    })

    // send message  
    socket.on("sendMessages", data => {
        const user = getUser(data.receiverId);
        console.log("USER :::::::::",user)
        io.to(user.socketId).emit("getMessage",data)

    })
})

