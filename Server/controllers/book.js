const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Book.find().populate('publishedBy', 'username')
            .then((books) => res.send(books))
            .catch(next);
    },

    post: (req, res, next) => {
        const {
            title,
            author,
            genre,
            description,
            imageUrl } = req.body;

        const { _id } = req.user;

        models.Book.create({ title, author, genre, description, imageUrl, publishedBy: _id })
            .then((createdBook) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { books: createdBook } }),
                    models.Book.findOne({ _id: createdBook._id })
                ]);
            })
            .then(([modifiedObj, bookObj]) => {
                res.send(bookObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const {
            title,
            author,
            genre,
            description,
            imageUrl } = req.body;

        models.Book.updateOne({ _id: id }, { title, author, genre, description, imageUrl })
            .then((updatedBook) => res.send(updatedBook))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Book.deleteOne({ _id: id })
            .then((removedBook) => res.send(removedBook))
            .catch(next)
    },

    like: (req, res, next) => {
        const id = req.params.id;
        const { _id } = req.user;

        models.Book.updateOne({ _id: id }, { $push: { likes: _id } })
            .then((updatedBook) => res.send(updatedBook))
            .catch(next);
    }
};