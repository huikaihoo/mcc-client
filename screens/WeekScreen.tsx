import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import WeekView from '../components/WeekView';

export default function TabWeekScreen() {
  return (
    <View style={styles.container}>
      <WeekView mode='week'></WeekView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
});
