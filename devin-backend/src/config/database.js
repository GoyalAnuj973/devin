//mongoosejs.com/docs/index.html
const mongoose = require("mongoose");

 const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://helloanuj:l01KtrEGmFaIpi7w@namasteanuj.ebx9z.mongodb.net/devin"
    );
};

module.exports = connectDB ;
