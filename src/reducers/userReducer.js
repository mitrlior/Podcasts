const userReducer = (
  state = {
    role: "Visitor",
    username: "Visitor",
    email: "",
    domain: "",
    isLoggedIn: false,
  },
  action
) => {
  switch (action.type) {
    case "SIGN_IN":
      return (state = {
        role: action.payload.role,
        username: action.payload.username,
        email: action.payload.userId.email,
        domain: action.payload.userId.domain,
        avatar: action.payload.avatar,
        isLoggedIn: true,
      });
    case "SIGN_OUT":
      return (state = {
        role: "Visitor",
        username: "Visitor",
        email: "",
        domain: "",
        isLoggedIn: false,
      });
    default:
      return state;
  }
};
export default userReducer;
