const mongoose = require("mongoose");

const connectDB = async () => {
  const URI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@entropiya-free-cluster.vo2hc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`

  //URI = process.env.DATABASE_CONNECTION
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
