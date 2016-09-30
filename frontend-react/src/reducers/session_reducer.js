import { browserHistory } from 'react-router'

export default function sessionReducer(state=[], action) {
  switch ( action.type ) {
    case 'LOG_IN_SUCCESS':
    debugger
      sessionStorage.setItem('jwt', action.payload.jwt)
      browserHistory.push('/success')
    default:
      return state
  }
}

