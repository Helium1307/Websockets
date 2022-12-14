const { ServerHttp } = require("./http");
require("./websocket");

ServerHttp.listen(5050, () => {
  console.log("listening on *:5050");
});
