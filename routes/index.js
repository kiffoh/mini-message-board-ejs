var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', messages:messages });
});

router.get("/new", (req, res, next) => {
  res.render('form', {title: 'New Message', })
})

router.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const userName = req.body.userName;

  messages.push({ text: messageText, user: userName, added: new Date()})
  
  res.redirect("/")
})

router.get("/message", (req, res) => {
  const messageText = req.query.text;
  const userName = req.query.user;
  const date = req.query.added;

  res.render('openMessage', {text: messageText, user: userName, added: date})
})

module.exports = router;
