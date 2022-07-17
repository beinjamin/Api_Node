const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbconfig');
const postsRoutes = require('./routes/postsController');
const mongoose = require('mongoose');






app.use(bodyParser.json());
app.use('/posts',postsRoutes);
app.listen(5500, () => console.log ('Serve started: 5500'));