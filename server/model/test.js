const mongoose = require ('mongoose');

const testSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    role: {
        type: String,
        default: "User"
    }
})

const TestModel = mongoose.model("Users", testSchema);

module.exports = TestModel;
