import * as React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native';

const ActionButton: React.FunctionComponent<TouchableWithoutFeedbackProps> = (props) => {
  let buttonStyle = props.disabled ? styles.disabledButton : (props.style || styles.button)

  return (
    <TouchableOpacity style={buttonStyle} {...props}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  )
};


const styles = StyleSheet.create({
  button:{
    width:"80%",
    backgroundColor:"green",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  disabledButton:{
    width:"80%",
    backgroundColor:"grey",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  text:{
    color:"white"
  }
});

export default ActionButton;
