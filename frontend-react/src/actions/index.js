export function logIn(userCreds) {
  const jwtToken = fetch('http://localhost:3000/api/v1/login', {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(userCreds)
  }).then(response => {
    debugger;
    return response.json()
  }).then(jwtTokenFromPayload => {
    debugger;
    return jwtTokenFromPayload
  })

  return {
    type: 'LOG_IN_SUCCESS', 
    payload: jwtToken
  }
}