import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import DayView from '../components/DayView';

export default function TabWeekScreen() {
  return (
    <View style={styles.container}>
      <DayView></DayView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
});
