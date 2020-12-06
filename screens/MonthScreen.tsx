import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import MonthView from '../components/MonthView';

export default function TabMonthScreen() {
  return (
    <View style={styles.container}>
      <MonthView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
});
