var express = require('express');
var app = express();
var apn = require('apn');

// apn setting
var options = { cert: "cer-dev.pem", key: "key-dev-no.pem", production: false};   
var apnConnection = new apn.Connection(options);

var david = "<9521ee9f c4d7727c a80fc1e8 8eaa5992 f6e6fd73 13b1af6a fed417fc 78bd40b0>"
var manta = "<79fb2e80 3e04a8dd e6232ef9 4cb75eab 31635aa7 7b76c6d3 2566a6a4 62954cae>"
var james = "<fc65fc37 32e2eb27 0d451da3 d308af1e 2b55cc79 f9fcbcce 5af61594 5306cb79>"
var neson = "<70f33ecc ca72ac33 37cadfaa f69b33ed e5323753 0ca97d53 c4631690 9cffb055>"
var alpha = "<ef8bdf13 02613796 2f56def2 ef1cbd5d b34e1ae9 8ef32e83 3eb98d8c dd1a9835>"
var yukai = "<145719e0 0222cb06 2e81dea0 b87fa8cc 110bef87 fba02d67 4d82b4e7 b326a5a4>"

var note = new apn.Notification();

note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
note.badge = 3;
note.sound = "ping.aiff";
note.alert = "\uD83D\uDCE7 \u2709 上課囉！！！！\uD83D\uDCE7 \u2709 上課囉！！！！\uD83D\uDCE7 \u2709 上課囉！！！！\uD83D\uDCE7 \u2709 上課囉！！！！";
note.payload = {'messageFrom': 'Caroline'};

// express

app.get('/', function(req, res) {
  apnConnection.pushNotification(note, new apn.Device(david));
  apnConnection.pushNotification(note, new apn.Device(james));
  apnConnection.pushNotification(note, new apn.Device(neson));
  apnConnection.pushNotification(note, new apn.Device(alpha));
  apnConnection.pushNotification(note, new apn.Device(yukai));
  res.send("push to ??");
})

app.get('/yo', function(req, res) {
  note.alert = "Yo!yO! 該上課囉！😀";
  apnConnection.pushNotification(note, new apn.Device(david));
  apnConnection.pushNotification(note, new apn.Device(james));
  apnConnection.pushNotification(note, new apn.Device(neson));
  apnConnection.pushNotification(note, new apn.Device(alpha));
  apnConnection.pushNotification(note, new apn.Device(yukai));
  res.send("push to ??");
})

app.get('/yo1', function(req, res) {
  note.alert = "各位評審大家好！！！😀😀😀😀";
  apnConnection.pushNotification(note, new apn.Device(david));
  apnConnection.pushNotification(note, new apn.Device(james));
  apnConnection.pushNotification(note, new apn.Device(neson));
  apnConnection.pushNotification(note, new apn.Device(alpha));
  apnConnection.pushNotification(note, new apn.Device(yukai));
  res.send("push to ??");
})

app.get('/noalert', function(req, res) {
  note.badge = 0;
  note.alert = "手機拿過來給我";
  apnConnection.pushNotification(note, new apn.Device(david));
  res.send("push to ??");
})

app.get('/hungry', function(req, res) {
  note.badge = 0;
  note.alert = "我好餓。";
  apnConnection.pushNotification(note, new apn.Device(manta));
  res.send("push to ??");
})



app.listen(3000);