const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function (req, res) {
    res.render('fiction_add');
};


// Find and update a book in database


//Add new book into database
const addData = function (req, res) {
    const path='/api/fiction';

    const postdata = {
        name: req.body.name,
        author: req.body.author,
        image: req.body.image
    };

    const requestOptions = {
        url : apiURL.server + path,
        method : 'POST',
        json : postdata
    };

    request(
        requestOptions,
        function (err, response){
            if (response.statusCode === 201) {
                res.redirect('/fiction');
            } else {
                res.render('error', {message: 'Error adding data: ' +
                        response.statusMessage +
                        ' ('+ response.statusCode + ')' });
            }
        }
    );
};

const fictionlist = function(req, res){
    const path= '/api/fiction';
    const requestOption = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };
    request(
        requestOption,
        function (err, response, body) {
            if (err) {
                res.render('error', {message : err.message});
            } else if (response.statusCode !== 200){
                res.render('error', {message : 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ") "});
            } else if (!(body instanceof Array)) {
                res.render('error', {message : 'Unexpected response data'});
            } else if (!body.length) {
                res.render('error', {message : 'No documents in collection'});
            } else {
                res.render('fiction', {fictions : body});
            }
        }
    );
};
module.exports = {
    fictionlist,
    showForm,
    addData
};

