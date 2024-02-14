const mongoose = require("mongoose");

const connectDb = async () => {

    const connectionpOptions = {
        dbName: `PristineDb`,
      }

    try {
        const connect = await mongoose.connect("mongodb+srv://pratiktakte:Pratik%402855@cluster0.fenzthg.mongodb.net/contacts?retryWrites=true&w=majority",connectionpOptions);
        console.log("database connected",connect.connection.host, connect.connection.name)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

}

module.exports = connectDb;