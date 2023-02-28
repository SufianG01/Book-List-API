// where I store all of my routes for handling book opreations

const express = require('express');
const books = require("./booksController");
const router = express.Router();

router.get("/book", books.index);
router.get("/book/:id", books.show)
router.post("/create", books.create);
router.delete("/delete/:id", books.delete)
router.put("/book/:id", books.update)

module.exports = router;