const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require("../controllers/ctrlMain");
const ctrlFiction = require("../controllers/ctrlFiction");
const ctrlNovel = require("../controllers/ctrlNovel");

/* Defining the routes and associating the routes to their corresponding controllers */
router.get('/', ctrlMain.index); //Home page
router.get('/fiction', ctrlFiction.fictionlist); //List of fictions
router.get('/novel', ctrlNovel.novellist); //List of novels

router
    .route('/fiction/add')
    .get(ctrlFiction.showForm) //Display the form
    .post(ctrlFiction.addData);
module.exports = router;
