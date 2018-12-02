const express = require('express');
const router = express.Router();

const ctrlFiction = require('../controllers/ctrlApiFiction');
const ctrlNovel = require('../controllers/ctrlApiNovel');

// fiction (list of fictions - books
router
    .route('/fiction')
    .get(ctrlFiction.bookList)
    .post(ctrlFiction.addBook);
// novel (list of novel - books)
router
    .route('/novel')
    .get(ctrlNovel.bookList)
    .post(ctrlNovel.addBook);

module.exports = router;