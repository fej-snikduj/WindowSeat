
function search(value, callback) {
  return fetch(`http://localhost:3001/api/route?flight_number=${value}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(function(response) {
    response.json().then(function(promise) {
      callback(promise);
    });
  });
};
 
export default search