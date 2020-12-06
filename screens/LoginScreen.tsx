import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { RootStackParamList } from '../types';
import { ActionButton, LinkedText, StyledTextInput } from '../components';
import AuthContext from '../context/AuthContext';

export default function LoginScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Login'>) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn, displayMessage, message } = React.useContext(AuthContext) as any;

  const isDisable = () => email.length <= 0 || password.length <= 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in to Medical App</Text>
      <StyledTextInput
        placeholder="Email..."
        value={email}
        onChangeText={setEmail}/>
      <StyledTextInput
        secureTextEntry
        placeholder="Password..."
        value={password}
        onChangeText={setPassword}/>
      <Text>{message}</Text>
      <ActionButton disabled={isDisable()} onPress={() => signIn({ email, password })}>LOGIN</ActionButton>
      <LinkedText onPress={() => {displayMessage(''); navigation.navigate('Signup')}}>New user? Sign up for Medical App</LinkedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 30,
  },
  separator: {
    backgroundColor: 'black',
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
