const twilio = require('twilio');

// incoming call
module.exports = (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();
  const gather = twiml.gather({
    action: `${process.env.BASE_URL}/steps/1`,
    input: 'speech',
    speechModel: 'numbers_and_commands',
    speechTimeout: 2,
  })
  gather.say({voice: 'alice'}, 'Hi, this is Anoosh with Alo. Do you own the business?');
  twiml.say({voice: 'alice'}, 'We didn\'t hear anything from you, Goodbye!');

  // send twiml response
  res.type('text/xml');
  res.send(twiml.toString());
};