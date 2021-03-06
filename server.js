if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config()
}

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


const indexRouter = require('./routes/index.js');
const authorsRouter = require('./routes/authors.js');

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');
app.set('views', __dirname +'/views');
app.set('layout','layouts/layout');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({limit:'10mb',extended:false }));
app.use('/', indexRouter);
app.use('/authors', authorsRouter);

mongoose.connect(process.env.DATABASE_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open',() => console.log('connected to mongodb'));

app.listen(process.env.PORT || 3000);
