# mcc-client

## Start client in local

```
yarn install
yarn start
```

## Config

- Modify `host` in [config.ts](./config.ts) if needed

## Remarks

- Month view cannot show correctly in react-native-web due to bug of plugin `react-native-calendars` (Refer to https://github.com/wix/react-native-calendars/pull/1313)
- Modified version of plugin `react-native-big-calendar` is used due to bug in that plugin (Refer to https://github.com/acro5piano/react-native-big-calendar/pull/305)

## TO-DO

- Check if access token is expired
- Use refresh token to get new access token (need server side support)
- Show details of clinic user in Settings tab after login
- Add conform password field in create user page
