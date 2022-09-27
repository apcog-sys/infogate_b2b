var request = require("request");
var options = {
  method: "POST",
  url: 'https://api.kapsystem.com/sms/1/text/query?username={rampskumar}&password={vlfRDt44}&from={SOWNET}&to={8197460526}&text={hello}&indiaDltPrincipalEntityId=1201159411873790283"',
  headers: {
    "x-api-key": "[API_KEY]",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    source: "SOWNET",
    destination: "8197460526",
    message: "Hello World #$£",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
