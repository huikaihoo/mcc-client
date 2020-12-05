import * as React from "react";

const MainReducer = () => {
  return React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
            message: "",
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            message: "",
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            message: "",
          };
        case "MESSAGE":
          return {
            ...prevState,
            message: action.message,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      message: "",
    }
  );
};

export default MainReducer;
