import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-big-calendar';
import moment from 'moment';

import AuthContext from '../context/AuthContext';

const convert = (records: any) => {
  const events: any[] = [];
  for (const property in records) {
    const record = records[property]
    events.push({
      title: record.patientName,
      start: moment(record.datetime).toDate(),
      end: moment(record.datetime).add(30, 'minute').toDate(),
      details: record,
    })
  }
  console.log('events', events);

  return events;
}

const WeekView = (props: any) => {
  const { fetchRecords, accessToken, records, openDetails } = React.useContext(AuthContext) as any;

  return (
    <Calendar
      style={styles.calendar}
      height={Dimensions.get('window').height}
      events={convert(records)}
      onChangeDate={(range) => fetchRecords({
        accessToken,
        from: moment(range[0]).set({'hour': 0, 'minute': 0, 'second': 0}).format("X"),
        to: moment(range[1]).set({'hour': 23, 'minute': 59, 'second': 59}).format("X")
      })}
      onPressEvent={(event: any) => openDetails(event.details)}
      mode={props.mode}
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

export default WeekView;
