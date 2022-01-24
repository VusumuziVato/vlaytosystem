const express = require('express')
const router = express.Router()
const Book = require('../models/book')
const imageMimeTypes = ['accept="audio/*"']

// Create Book Route
router.post('/new', async (req, res) => {
  const book = new Book({
    title: req.body.title,
    publishDate: new Date(req.body.publishDate),
    description: req.body.description,
  })
  saveCover(book, req.body.cover)
})

function saveCover(book, coverEncoded) {
  if (coverEncoded == null) return
  const cover = JSON.parse(coverEncoded)
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    book.coverImage = new Buffer.from(cover.data, 'base64')
    book.coverImageType = cover.type
  }
} 

module.exports = router