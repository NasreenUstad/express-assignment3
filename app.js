const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const diaryRoutes = require('./routes/diary');
const adminRoutes = require('./routes/admin');
const rootDir = require('./util/path');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(diaryRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(8000);
