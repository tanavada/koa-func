const logger = require("firebase-functions/logger");
const HelloWorld = async (ctx) => {
   return ctx.body = {
      message: 'Hello World!'
   }
}

module.exports = {
   HelloWorld
}