import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import MonthAgenda from '../components/Agenda';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <MonthAgenda></MonthAgenda>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
});
