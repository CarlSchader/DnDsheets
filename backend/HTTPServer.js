const express = require('express');
const twilio = require('twilio');
const MessagingResponse = twilio.twiml.MessagingResponse;
const bodyParser = require('body-parser');

const {Stitch, AnonymousCredential} = require('mongodb-stitch-server-sdk');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());       // to support JSON-encoded bodies

// Twilio stuff
var accountSid = 'AC9c1efaaec9f54b9372036591dd701f80'; // Your Account SID from www.twilio.com/console
var authToken = 'e42e490ed559f0d61d30faa0c731136c';

var client = new twilio(accountSid, authToken);

// app.post('/sms', (req, res) => {
// 	const twiml = new MessagingResponse();
//
// 	twiml.message('Sup. Test works.');
//
// 	res.writeHead(200, {'Content-Type': 'text/xml'});
// 	res.end(twiml.toString());
// });

const dbClient = Stitch.initializeDefaultAppClient('dndsheets-lukpd');
dbClient.auth.loginWithCredential(new AnonymousCredential()).then(user => {



    // dbClient.close();
}).catch(err => {
    console.log(err);
    dbClient.close();
})

app.post('/receiveSMS', (req, res) => {
  console.log("Received request: /" + req.body.Body + "/");
  if(req.body.Body.toLowerCase() == '?') {
    const twiml = new MessagingResponse();
    twiml.message('Available Commands:\n1. List Characters');
    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  } else {
    res.send("Bye");
  }
});

app.post('/submitForm', (req, res) => {
  for(var key in req.body) {
  	console.log(key + ' -> ' + "");
  	console.log(req.body[key]);
  }
  res.send("Bye");
});

app.get('/', (req, res) => {
  res.send("Hello world");
});


// Webhook Example
// app.get('/', (req, res) => {
//   console.log("Received text");
//   res.send('Hello World!');
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
