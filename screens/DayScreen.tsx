import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import WeekView from '../components/WeekView';

export default function TabDayScreen() {
  return (
    <View style={styles.container}>
      <WeekView mode='day'></WeekView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
});
