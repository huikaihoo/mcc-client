import * as React from "react";

const MainReducer = () => {
  return React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            accessToken: action.token,
            isLoading: false,
            message: "",
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            accessToken: action.token,
            message: "",
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            accessToken: null,
            message: "",
            records: [],
          };
        case "ADD_RECORDS":
          let newRecords: { [key: string]: any } = {};
          let hasUpdate = false;

          for (const property in action.records) {
            if (!prevState.records[property]) {
              newRecords[property] = action.records[property];
              hasUpdate = true;
            }
          }

          if (hasUpdate) {
            return {
              ...prevState,
              records: { ...prevState.records, ...action.records },
            };
          } else {
            return prevState;
          }
        case "OPEN_DETAILS":
          return {
            ...prevState,
            showDetails: true,
            details: action.details,
          };
        case "CLOSE_DETAILS":
          return {
            ...prevState,
            showDetails: false,
            details: null,
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
      accessToken: null,
      message: "",
      records: {},
      showDetails: false,
      details: null,
    }
  );
};

export default MainReducer;
