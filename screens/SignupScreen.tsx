import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ActionButton, LinkedText, StyledTextInput } from '../components';
import { RootStackParamList } from '../types';
import AuthContext from '../context/AuthContext';

export default function SignUpScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'Signup'>) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [clinicName, setClinicName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');

  const { signUp, clearMessage, message } = React.useContext(AuthContext) as any;

  const isDisable = () => email.length <= 0 || password.length <= 0 || clinicName.length <= 0 || phone.length <= 0 || address.length <= 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <StyledTextInput
        placeholder="Email..."
        value={email}
        onChangeText={setEmail}/>
      <StyledTextInput
        secureTextEntry
        placeholder="Password..."
        value={password}
        onChangeText={setPassword}/>
      <StyledTextInput
        placeholder="Clinic Name..."
        value={clinicName}
        onChangeText={setClinicName}/>
      <StyledTextInput
        placeholder="Phone..."
        value={phone}
        onChangeText={setPhone}/>
      <StyledTextInput
        placeholder="Address..."
        value={address}
        onChangeText={setAddress}/>
      <Text>{message}</Text>
      <ActionButton disabled={isDisable()} onPress={ async () => {
        const isSuccess = await signUp({ email, password, clinicName, phone, address });
        if (isSuccess) {
          navigation.replace('Root');
        }
      }}>SIGNUP</ActionButton>
      <LinkedText onPress={() => {clearMessage(); navigation.replace('Login')}}>Already have an account? Log in now!</LinkedText>
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
