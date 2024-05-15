const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/foodApp";
const mongoDB = async () => {
  console.log("hallo");
  await mongoose.connect(mongoURI);
  const fetchedData = mongoose.connection.db.collection("foodCategory");
  return await fetchedData.find({}).toArray(function (err, data) {
    if (err) console.log(err);
    else console.log("data", data);
  });
};
module.exports = mongoDB;
