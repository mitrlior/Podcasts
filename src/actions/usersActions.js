export const signin = (user) => {
  return {
    type: "SIGN_IN",
    payload: user,
  };
};

export const signout = () => {
  return { type: "SIGN_OUT" };
};
