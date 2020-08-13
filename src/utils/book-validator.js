const validateBook = (title, author, genre, opinion, imageUrl) => {

    const errors = [];
    
    if (imageUrl.length < 1) {
        errors.push('You must upload cover.');
    }
    
    if (title.length < 1) {
        errors.push('Title cannnot be empty.');
    }

    if (author.length < 1) {
        errors.push('Author cannot be empty.');
    }

    if (genre.length < 1) {
        errors.push('Genre cannot be empty.');
    }

    if (opinion.length < 1) {
        errors.push('Opinion cannot be empty.');
    }

    return errors;
}

export default validateBook;