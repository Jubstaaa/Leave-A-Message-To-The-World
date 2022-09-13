const authState = {};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.user.uid,
        displayName: action.user.displayName,
        photoUrl: action.user.photoURL,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
