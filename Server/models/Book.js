const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const bookSchema = new Schema({
    
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    genre: {
        type: String,
        required: true,
    },
    
    description: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    publishedBy: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Book', bookSchema);