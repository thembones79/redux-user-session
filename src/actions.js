export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

export function onLogIn() {
  return {
    type: LOGGED_IN,
    user: {
      userid: 42,
      username: "you",
      token: "abcdefg"
    }
  };
}

export function onLogOut() {
  return {
    type: LOGGED_OUT,
    user: null
  };
}
