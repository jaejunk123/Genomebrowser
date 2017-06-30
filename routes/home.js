var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('home router');

router.get('/', function(req, res, next) {
    res.render('home', { title: '' });
});

router.get('/home', function(req, res, next) {
    res.render('home', { title: '' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: '' });
});

router.get('/news', function(req, res, next) {
    res.render('news', { title: '' });
});

router.get('/downloads', function(req, res, next) {
    res.render('downloads', { title: '' });
});

router.get('/faq', function(req, res, next) {
    res.render('faq', { title: '' });
});

router.get('/discussion', function(req, res, next) {
    res.render('discussion', { title: '' });
});

router.get('/login', function(req, res, next) {
    res.render('login', { title: '' });
});

module.exports = router;
