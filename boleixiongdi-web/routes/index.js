var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  console.log(req.originalUrl);
  console.log(req.url);
  var url = req.url;
  var urls =url.split(".");
  console.log(urls[0]);
  var urlstr= urls[0].replace("/","");
  console.log(urlstr);
  res.render(urlstr, {
      title: '花尖墨',
    });
});

router.get('/tastemakers', function(req, res) {
  res.render("tastemakers", {
      title: '花尖墨',
    });
});


router.get('/blog', function(req, res) {
  res.render("blog", {
      title: '花尖墨',
    });
});

router.get('/a-list', function(req, res) {
  res.render("a-list", {
      title: '花尖墨',
    });
});

router.get('/contribute', function(req, res) {
  res.render("contribute", {
      title: '花尖墨',
    });
});

router.get('/about', function(req, res) {
  res.render("about", {
      title: '花尖墨',
    });
});

module.exports = router;
