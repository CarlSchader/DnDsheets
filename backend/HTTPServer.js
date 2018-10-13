const express = require('express')
const app = express()
const port = 3000
const MessagingResponse = require('twilio').twiml.MessagingResponse;


// Twilio stuff
var accountSid = 'AC9c1efaaec9f54b9372036591dd701f80'; // Your Account SID from www.twilio.com/console
var authToken = 'e42e490ed559f0d61d30faa0c731136c';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

app.post('/sms', (req, res) => {
	const twiml = new MessagingResponse();

	twiml.message('Sup. Test works.');

	res.writeHead(200, {'Content-Type': 'text/xml'});
	res.end(twiml.toString());
});


// Webhook Example
// app.get('/', (req, res) => {
//   console.log("Received text");
//   res.send('Hello World!');
// });


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
