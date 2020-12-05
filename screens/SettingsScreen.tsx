import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { ActionButton } from '../components';
import { Text, View } from '../components/Themed';
import AuthContext from '../context/AuthContext';

export default function TabTwoScreen() {

  const { signOut } = React.useContext(AuthContext) as any;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ActionButton style={styles.logoutButton} onPress={signOut}>LOGOUT</ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logoutButton:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});
