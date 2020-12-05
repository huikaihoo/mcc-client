import * as React from 'react';
import { StyleSheet, View, TextInput, TextInputProps } from 'react-native';

const StyledTextInput: React.FunctionComponent<TextInputProps> = (props) => (
  <View style={styles.inputView}>
    <TextInput placeholderTextColor="white" style={styles.inputText} {...props}/>
  </View>
)

const styles = StyleSheet.create({
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
});

export default StyledTextInput;
