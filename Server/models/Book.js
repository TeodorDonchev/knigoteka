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
    
    opinion: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    likes: [{
        type: ObjectId,
        ref: 'User'
    }],

    publishedBy: {
        type: ObjectId,
        ref: "User"
    }

});

module.exports = new Model('Book', bookSchema);