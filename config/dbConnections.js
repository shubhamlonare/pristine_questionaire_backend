const mongoose = require("mongoose");

const connectDb = async () => {

    const connectionpOptions = {
        dbName: `PristineDb`,
      }

    try {
        const connect = await mongoose.connect("mongodb+srv://shubham:SMemZlD6vG2784DV@pristinedatabase.ygc9g0v.mongodb.net/?retryWrites=true&w=majority",connectionpOptions);
        console.log("database connected",connect.connection.host, connect.connection.name)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

module.exports = connectDb;