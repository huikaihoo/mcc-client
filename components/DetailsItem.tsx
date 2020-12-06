import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailsItem = (props: any) => (
  <View  style={styles.container}>
    <Text style={styles.titleText}>{props.title}</Text>
    <Text style={styles.contentText}>{props.children}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
    padding: 20,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  contentText: {
    marginBottom: 5,
  }
});

export default DetailsItem;
