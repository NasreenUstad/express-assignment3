const path = require('path');
const express = require('express');

const routes = express.Router();
const rootDir = require('../util/path');

routes.get('/add-friend', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-friend.html'));
});

routes.post('/add-friend', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})
module.exports = routes;