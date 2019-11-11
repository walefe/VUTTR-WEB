export function signInRequest(email) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name, email) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
