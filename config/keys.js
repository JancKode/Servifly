//LHoGCGzs6cRIPxPs
//mongodb+srv://user:LHoGCGzs6cRIPxPs@cluster0-g0v1g.mongodb.net/test?retryWrites=true&w=majority

/*
prod api
 client id:
   467687852282-349cau4io86lns04b9huh88en2b8pf0d.apps.googleusercontent.com
 secret key:
    y6REpntaHQ9V0Vqr4V606ZbA
*/

if (process.env.NODE_ENV === "production") {
  //return prod kyes
  module.exports = require("./prod");
} else {
  //return dev keys
  module.exports = require("./dev");
}
