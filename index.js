const fetch = require("node-fetch");

exports.handler = async (evt) => {
	
	let payload = {
	   "buyer_id": "mariano",
	   "start_date": "2020-03-13",
	   "end_date": "2020-03-15",
	   "near": "tate gallery",
	}
   // fetch the request
	let response = await fetch("https://trfm8glvli.execute-api.us-east-1.amazonaws.com/Prod/hotel", {
                  method: 'POST',
                  body: JSON.stringify(payload)
               });
   
   // get the JSON
	let json = await response.json();

   return json;
}