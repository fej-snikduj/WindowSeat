import IATA_API_KEY from './config/iatacodes.js';

function search(value, callback) {
  var myInit = {method: 'GET',
mode: 'cors'};
  console.log(IATA_API_KEY, value);
  console.log(`https://iatacodes.org/api/v6/routes?api_key=${IATA_API_KEY}&flight_number=${value}`);
  fetch(`https://iatacodes.org/api/v6/routes?api_key=${IATA_API_KEY}&flight_number=${value}`, myInit).then(function(response) {
    console.log(response);
    return callback(response);
  }).catch(function(err) {
    console.log(err);
    console.log('anything')
  });
  // fetch('https://iatacodes.org/api/v6/routes?api_key=a0330f29-c948-442d-a7dc-d45774cf3395')

 // fetch(`https://iatacodes.org/api/v6/routes?api_key=${IATA_API_KEY}&flight_number=${value}`, myInit).then(function(response) {
 //    return callback(response);
 //  }).catch(function(err) {
 //    console.log(err);
 //    console.log('anything')
 //  });

  // return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson.movies;
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }


};

// {"request":{"lang":"en","currency":"USD","time":2,"id":14760814331,"server":"c","pid":24300,"key":{"id":144,"api_key":{IATA_API_KEY}},"type":"demo","expired":"2015-01-17T01:15:31.000Z","registered":"2015-01-30T01:15:32.000Z","limits_by_hour":0,"limits_by_minute":0,"usage_by_hour":7854,"usage_by_minute":7854},"params":{"lang":"en"},"version":6,"method":"routes","client":{"country_code":"US","country":"United States","city":"San Francisco","lat":37.7484,"lng":-122.4156,"ip":"67.180.193.72","device":{"type":"desktop"},"agent":{"browser":"Chrome","version":"53.0.2785.143","os":"OS X","platform":"Apple Mac"}}},"response":[{"flight_number":"J2854","departure":"GYD","arrival":"DME","reg_number":"4K-AZ86"}]}

// fetch('https://mywebsite.com/endpoint/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     firstParam: 'yourValue',
//     secondParam: 'yourOtherValue',
//   })
// })


export default search