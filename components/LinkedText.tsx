import * as React from 'react';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native';

import { Text } from './Themed';

const LinkedText: React.FunctionComponent<TouchableWithoutFeedbackProps> = (props) => (
  <TouchableOpacity style={styles.link} {...props}>
    <Text style={styles.linkText}>{props.children}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

export default LinkedText;
