var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken'),
    bodyParser  = require('body-parser');

var app = module.exports = express.Router();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// XXX: This should be a database of users :).
var users = [{
  id: 1,
  username: 'admin@admin.com',
  password: '12345678'
}];

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

function getUserScheme(req) {

  var username;
  var type;
  var userSearch = {};

  // The POST contains a username and not an email
  if(req.body.username) {
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  }
  // The POST contains an email and not an username
  else if(req.body.email) {
    username = req.body.email;
    type = 'email';
    userSearch = { email: username };
  }

  return {
    username: username,
    type: type,
    userSearch: userSearch
  }
}

app.post('/users', function(req, res) {

  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  if (_.find(users, userScheme.userSearch)) {
   return res.status(400).send("A user with that username already exists");
  }

  var profile = _.pick(req.body, userScheme.type, 'password', 'extra');
  profile.id = _.max(users, 'id').id + 1;

  users.push(profile);

  res.status(201).send({
    id_token: createToken(profile)
  });
});

app.post('/sessions/create', function(req, res) {

  var userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  var user = _.find(users, userScheme.userSearch);

  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

  if (user.password !== req.body.password) {
    return res.status(401).send("The username or password don't match");
  }

  res.status(201).send({
    id_token: createToken(user)
  });
});

app.post('/api/admin/v1/auth', function(req, res) {

  var user = "user"
  res.status(201).send({
    access_token: createToken(user)
  });
});

app.get('/api/admin/v1/users', function(req, res) {

  var users = {
    meta : {
      total: 2,
      per_page: 1,
      page: 1
    },
    data: [{
      id: 1,
      email: "justin@beansmile.com",
      name: "Justin",
      roles: "管理员",
      created_at: "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
    },
    {
      id: 2,
      email: "gdjyluxiaoyong@gmail.com",
      name: "Justin Lu",
      roles: "普通用户",
      created_at: "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
    }]
  }

  res.status(201).send(users);
});


function getAdminUserScheme(req) {

  var username;
  var type;
  var userSearch = {};
  console.log(req.body);
  if (req.body.email) {
      // The POST contains a username and not an email
      if(req.body.username) {
        username = req.body.email;
        type = 'email';
        userSearch = { email: username };
      }

      return {
        username: email,
        type: type,
        userSearch: userSearch
      }

  }

}
