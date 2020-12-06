import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Login: "login",
      SignUp: "signup",
      Loading: "loading",
      Details: "details",
      Root: {
        screens: {
          TabMonth: {
            screens: {
              TabMonthScreen: "month",
            },
          },
          TabWeek: {
            screens: {
              TabWeekScreen: "week",
            },
          },
          TabDay: {
            screens: {
              TabDayScreen: "day",
            },
          },
          TabSettings: {
            screens: {
              TabSettingsScreen: "settings",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
