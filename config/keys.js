if (process.env.NODE_ENV === "production") {
  //return prod kyes
  module.exports = require("./prod");
} else {
  //return dev keys
  module.exports = require("./dev");
}
