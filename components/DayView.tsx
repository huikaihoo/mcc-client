import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-big-calendar'
import moment from 'moment';

const events = [
  {
    title: 'Meeting',
    start: moment().set('hour', 10).set('minute', 0).toDate(),
    end: moment().set('hour', 10).set('minute', 30).toDate(),
  },
  {
    title: 'Coffee break',
    start: moment().set('hour', 14).set('minute', 30).toDate(),
    end: moment().set('hour', 15).set('minute', 30).toDate(),
  },
  {
    title: 'Repair my car',
    start: moment().add(1, 'day').set('hour', 7).set('minute', 45).toDate(),
    end: moment().add(1, 'day').set('hour', 13).set('minute', 30).toDate(),
  },
  {
    title: 'Meet Realtor',
    start: moment().add(1, 'day').set('hour', 8).set('minute', 25).toDate(),
    end: moment().add(1, 'day').set('hour', 9).set('minute', 55).toDate(),
  },
  {
    title: 'Laundry',
    start: moment().add(1, 'day').set('hour', 8).set('minute', 25).toDate(),
    end: moment().add(1, 'day').set('hour', 11).set('minute', 0).toDate(),
  },
]

export default function DayView() {
  return (
    <Calendar
      style={styles.calendar}
      height={Dimensions.get('window').height}
      events={events}
      mode="day"
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
});
