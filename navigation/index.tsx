import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Alert, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { signinApi, signupApi } from '../api/authApi';
import { recordsApi } from '../api/dataApi';
import AuthContext from '../context/AuthContext';
import MainReducer from '../reducer/MainReducer';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  const [state, dispatch] = MainReducer();

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let accessToken;

      try {
        accessToken = await AsyncStorage.getItem('accessToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: accessToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data: { email: string, password: string}) => {
        // dispatch({ type: 'SIGN_IN', token: '123' });
        try {
          const result = await signinApi(data);
          if (result.data.accessToken) {
            dispatch({ type: 'SIGN_IN', token: result.data.accessToken });
          }
        } catch (err) {
          dispatch({ type: 'MESSAGE', message: 'invalid login credentials' });
          console.log(err);
        }
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data: any) => {
        try {
          const result = await signupApi(data);
          if (result.status === 201) {
            const result = await signinApi(data);
            if (result.data.accessToken) {
              dispatch({ type: 'SIGN_IN', token: result.data.accessToken });
              return true;
            }
          }
        } catch (err) {
          if (err.response && err.response.status === 401) {
            dispatch({ type: 'MESSAGE', message: 'invalid login credentials' });
          } else if (err.response && err.response.data && err.response.data.message) {
            dispatch({ type: 'MESSAGE', message: err.response.data.message });
          } else {
            dispatch({ type: 'MESSAGE', message: 'failed to create new account' });
          }
          console.log(err);
        }
        return false;
      },
      fetchRecords: async (data: { accessToken: string, from: number, to: number }) => {
        try {
          const records: { [key: string]: any } = {};

          let offset = 0;
          let needContinue = true;
          do {
            const result = await recordsApi({
              offset,
              limit: 100,
              ...data
            });
            // console.log(data, result.data);
            if (result.data.total > 0 && result.data.results.length > 0) {
              const results = result.data.results
  
              results.forEach(result => {
                records[result.id] = result;
              })
            }
            needContinue = (result.data.total > 100) && (result.data.results.length > 0);
            offset += 100;
          } while (needContinue);

          // console.log(records);
          dispatch({ type: 'ADD_RECORDS', records });
        } catch (err) {
          dispatch({ type: 'MESSAGE', message: 'invalid login credentials' });
          console.log(err);
        }
      },
      displayMessage: (message: string = '') => dispatch({ type: 'MESSAGE', message }),
    }),
    []
  );

  return (
    <AuthContext.Provider value={{...state, ...authContext}}>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Loading" component={LoadingScreen} />
          ) : state.accessToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Sign in',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
            // User is signed in
            <Stack.Screen name="Root" component={BottomTabNavigator} />
        )}
        <Stack.Screen name="Signup" component={SignUpScreen} />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
}
