import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { ActionButton } from '../components';
import AuthContext from '../context/AuthContext';

export default function TabTwoScreen() {

  const { signOut } = React.useContext(AuthContext) as any;

  return (
    <View style={styles.container}>
      <ActionButton style={styles.logoutButton} onPress={signOut}>LOGOUT</ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 15,
  },
  separator: {
    backgroundColor: 'black',
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
