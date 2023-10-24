/** Server startup for Message.ly. */

const app = require("./app");

app.listen(3500, function () {
  console.log("Listening on 3500");
});
