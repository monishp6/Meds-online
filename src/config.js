const mongoose=require("mongoose");
const connext=mongoose.connect("mongodb://localhost:27017/Login");

connect.then(() => {
    console.log("Database connected Successfully");
    })
    .catch(() => {
    console.log("Database cannot be connected");
    });

    const LoginSchema = new mongoose.Schema ({
        name: {
        type: String,
        required:true
        },
        password: {
        type: String,
        required:true
        }
        });
        //collection Part
        const collection = new mongoose.model("users", LoginSchema);
        module.exports = collection;