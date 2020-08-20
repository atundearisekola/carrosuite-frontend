const messagesDefault = {
  messages: {}
};

export default (state = messagesDefault, action) => {
  const { payload } = action;
  switch (action.type) {
    case "GET_MESSAGES":
      return {
        ...state,
        messages: {
          ...payload
        }
      };
    default:
      return state;
  }
};
