import IATA_API_KEY from './config/iatacodes.js';

function search(value, callback) {
  fetch('http://localhost:3001/api/route', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      value: value,
    })
  })
};
 
export default search