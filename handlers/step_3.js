const twilio = require('twilio');

// first step
module.exports = (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();
  console.log(req.body.SpeechResult);

  // read the user's response
  twiml.say({voice: 'alice'}, 'Your email: ' + req.body.SpeechResult);
  twiml.say({voice: 'alice'}, 'Thank you, Bye bye!');
  // send twiml response
  res.type('text/xml');
  res.send(twiml.toString());
};