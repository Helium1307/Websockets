const socket = io();

const urlSearch = new URLSearchParams(window.location.search);
const username = urlSearch.get("name");
const selectedRoom = urlSearch.get("select_room");

socket.emit("select_room", {
  username,
  selectedRoom,
});

console.log(
  `aqui tem os users da sala ${selectedRoom} :`,
  socket.in(selectedRoom).fetchSockets()
);

const listItem = document.createElement("li");
listItem.innerHTML = `Temos conectado o(a) ${username} nessa sala : ${selectedRoom}`;
document.getElementsByTagName("ul")[0].appendChild(listItem);
