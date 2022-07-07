const express = require('express');
const app = express();
require('./models/dbconfig');
const postsRoutes = require('./routes/postsController');


app.use('/',postsRoutes);


app.listen(5500, () => console.log ('Serve started: 5500'));