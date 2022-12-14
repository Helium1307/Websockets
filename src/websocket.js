const { io } = require("./http");

let users = [];

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  socket.on("select_room", (data) => {
    socket.join(data.selectedRoom);

    const userInRoom = users.find(
      (user) =>
        user.username === data.username && user.room === data.selectedRoom
    );

    if (userInRoom) {
      userInRoom.socket_id = socket_id;
    } else {
      users.push({
        username: data.username,
        selectedRoom: data.selectedRoom,
        socket_id: socket.id,
      });
    }

    console.log(users);
  });
});
