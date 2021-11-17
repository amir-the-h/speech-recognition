const twilio = require('twilio');

// first step
module.exports = (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  // check if the user said yes or no
  if (req.body.SpeechResult.toLowerCase().includes('yes')) {
    const gather = twiml.gather({
      action: `${process.env.BASE_URL}/steps/2`,
      input: 'speech',
      speechModel: 'numbers_and_commands',
      speechTimeout: 2,
    })
    gather.say({voice: 'alice'}, 'Cool! Are you interested in a credit report?');
    twiml.say({voice: 'alice'}, 'We didn\'t hear anything from you, Goodbye!');
  } else {
    twiml.say({voice: 'alice'}, 'Bussines owner line only.');
  }

  // send twiml response
  res.type('text/xml');
  res.send(twiml.toString());
};