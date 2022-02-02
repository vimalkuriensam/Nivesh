var http = require("http");

var options = {
  "method": "POST",
  "hostname": "api.msg91.com",
  "port": null,
  "path": "/api/v2/sendsms",
  "headers": {
    "authkey": "192745AQIaEb7mZ2H05a57bd44",
    "content-type": "application/json"
  }
};

exports.sendTextMessage = function (messageText, mobileNumberList) {

  var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });

  req.write(JSON.stringify({
    sender: 'DCCAFE',
    route: '4',
    country: '91',
    sms: [{ message: messageText, to: mobileNumberList }]
  }));

  req.end();
}