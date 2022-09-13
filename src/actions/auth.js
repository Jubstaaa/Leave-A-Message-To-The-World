import { firebase, googleAuthProvider } from "..//firebase/firebaseConfig";

export const login = () => {
  return firebase.auth().signInWithRedirect(googleAuthProvider);
};

export const loginAction = (user) => ({
  type: "LOGIN",
  user,
});

export const logout = () => {
  return firebase.auth().signOut();
};

export const logoutAction = () => ({
  type: "LOGOUT",
});
