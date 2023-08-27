const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const { MONGO_ATLAS } = process.env;

const connect = () => {
  return mongoose.connect(MONGO_ATLAS);
};

module.exports = connect;
