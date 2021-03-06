const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Book.find()
            .then((books) => res.send(books))
            .catch(next);
    },

    getOne: (req, res, next) => {
        models.Book.findById(req.query.id).populate('publishedBy', 'username').populate('likes', 'username')
            .then((book) => {
                res.send(book)
            })
            .catch(next);
    },

    post: (req, res, next) => {
        const {
            title,
            author,
            genre,
            opinion,
            imageUrl
        } = req.body;

        const { _id } = req.user;

        models.Book.create({ title, author, genre, opinion, imageUrl, publishedBy: _id })
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
            opinion,
            imageUrl } = req.body;

        models.Book.updateOne({ _id: id }, { title, author, genre, opinion, imageUrl })
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

        models.Book.findByIdAndUpdate({ _id: id }, { $push: { likes: _id } }, { new: true, useFindAndModify: false }).populate('likes', 'username')
            .then((updatedBook) => {
                res.send(updatedBook)
            })
            .catch(next);
    }
};