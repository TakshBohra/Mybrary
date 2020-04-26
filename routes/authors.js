/*const express = require('express');
const router = express.Router();
const Author = require('../models/author');

//All authors routes
router.get('/',async(req,res) => {
  let searchoptions = { }
  if(req.query.name != null && req.query.name != ''){
    searchoptions.name = new RegExp(req.query.name , 'i');
  }
  try{
      const authors = await Author.find(searchoptions);
      res.render('authors/index', {
        authors : authors,
        searchoptions:req.query
      });
  }catch{
      res.redirect('/');
  }
});

//New author routes
router.get('/new',(req,res) => {
    res.render('authors/new',{author: new Author() });
});

//Create author routes
router.post('/',async (req,res) => {
    const author = new Author({
      name : req.body.name
    });
    try {
      const newAuthor = await author.save();
      //res.redirect(`authors/${newAuthor.id}`);
      res.redirect(`authors`);

    }catch(error){
      res.render('authors/new', {
        author:author,
        errorMessage:'Error creating Author'
      });

    }
  });

    /*author.save((err,newAuthor) => {
      if(err){
          res.render('authors/new', {
            author:author,
            errorMessage:'Error creating Author'
          });
    }else{
      //res.redirect(`authors/${newAuthor.id}`);
      res.redirect('authors');
    }
  });


module.exports = router;
*/


const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// All Authors Route
router.get('/', async (req, res) => {
  let searchOptions = {}
  if (req.query.name != null && req.query.name !== '') {
    searchOptions.name = new RegExp(req.query.name, 'i')
  }
  try {
    const authors = await Author.find(searchOptions)
    res.render('authors/index', {
      authors: authors,
      searchOptions: req.query
    })
  } catch {
    res.redirect('/')
  }
})

// New Author Route
router.get('/new', (req, res) => {
  res.render('authors/new', { author: new Author() })
})

// Create Author Route
router.post('/', async (req, res) => {
  const author = new Author({
    name: req.body.name
  })
  try {
    const newAuthor = await author.save()
    // res.redirect(`authors/${newAuthor.id}`)
    res.redirect(`authors`)
  } catch {
    res.render('authors/new', {
      author: author,
      errorMessage: 'Error creating Author'
    })
  }
})

module.exports = router
