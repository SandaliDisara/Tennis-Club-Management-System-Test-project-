const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
})

const Member = mongoose.model("Member", memberSchema);

module.exports(Member);