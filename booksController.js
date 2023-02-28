// this will be where I store all of my function for handling books opreations
const { Book } = require(`./models/book`);
const createError = require("http-errors");

let books = [];
let idNo = 0;

exports.index = function (req, res) {
  Book.find().then((books) => {
    res.send(books);
  });
};

exports.create = function (req, res, next) {
  if (!req.body.title) {
    return next(createError(400, "Title is required"));
  }

  // create the book

  const book = new Book({
    title: req.body.title,
    author: req.body.author,
    read: req.body.read,
  });

  // save the book

  book.save().then((book) => {
    res.send(book);
  });

  // books.push({
  //     id:idNo,
  //     title: req.body.title,
  //     author: req.body.author,
  //     status: req.body.status,
  // })
  // idNo++

  // res.send({
  //     result: true
  // })
};

exports.show = function (req, res, next) {
  Book.findById(req.params.id).then((book) => {
    if (!book) {
      return next(createError(404, `book not found`));
    }
    res.send(book);
  });
  // const booksItem = books.find(books => books.id == req.params.id)
  // if (!booksItem) {
  //     return (next(createError(404, "Book not found.")))
  // }

  // res.send(booksItem)
};

exports.delete = function (req, res, next) {
  Book.findByIdAndDelete(req.params.id).then((book) => {
    if (!book) {
      return next(createError(404, `not found`));
    }
    res.send(`book deleted`)
  });

  // const booksItem = books.find(books => books.id == req.params.id)
  // if (!booksItem) {
  //     return (next(createError(404, "Book not found.")))
  // }

  // books = books.filter(books => books.id != req.params.id)
  // res.send({
  //     result: true
  // })
};

exports.update = function (req, res, next) {
  Book.findOneAndUpdate(
    { _id: req.params.id },
    {
      ...req.body,
    }
  ).then((book) => {
    if (!book) {
      return next(createError(404, `not found`));
    }
    res.send(book);
  });

  // if (!req.body.title) {
  //     return (next(createError(404, "Title is required.")))
  // }
  // const booksItem = books.find(books => books.id == req.params.id)
  // if (!booksItem) {
  //     return (next(createError(404, "Book not found.")))
  // }

  // books = books.map(books => {
  //     if (books.id == req.params.id) {
  //         books.title = req.body.title
  //         books.author = req.body.author
  //         books.status = req.body.status
  //     }
  //     return books
  // })

  // res.send({
  //     result: true
  // })
};
