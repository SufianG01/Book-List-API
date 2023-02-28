const mongoose = require(`mongoose`)

// model = schema//

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    read: Boolean
})

module.exports.Book = mongoose.model(`Book`, bookSchema, `book`)
