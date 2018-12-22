const path = require('path');
const express = require('express');

const routes = express.Router();

const rootDir = require('../util/path');

routes.get('/', (req, res,next) => {
    res.sendFile(path.join(rootDir, 'views', 'diary.html'));
});
module.exports = routes;