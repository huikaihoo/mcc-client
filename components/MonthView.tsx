import * as React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Agenda } from 'react-native-calendars';
import moment from 'moment';

import AuthContext from '../context/AuthContext';

const convert = (records: any, current: number) => {
  const items: { [key: string]: any[] } = {};

  if (current > 0) {
    const from = moment(current).startOf('month').subtract(1, 'month');
    const to = moment(current).startOf('month').add(2, 'month');
    for (let m = moment(from); m.isBefore(to); m.add(1, 'day')) {
      items[m.format('YYYY-MM-DD')] = [];
    }
  }

  for (const property in records) {
    const record = records[property];
    const key = moment(record.datetime).format('YYYY-MM-DD');
    if (!items[key]) {
      items[key] = [];
    }
    items[key].push(record)
  }
  console.log('items', items);
  return items;
}

const renderItem = (item: any) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => Alert.alert(item.id)}>
      <Text>{item.patientName} @ {moment(item.datetime).format('HH:mm')}</Text>
    </TouchableOpacity>
  );
}

const renderEmptyDate = () => {
  return (
    <View style={styles.emptyDate}>
      <Text>(No consultations)</Text>
    </View>
  );
}

const MonthView = (props: any) => {
  const [current, setCurrent] = React.useState(0);

  const { fetchRecords, accessToken, records } = React.useContext(AuthContext) as any;

  return (
    <Agenda
      items={convert(records, current)}
      loadItemsForMonth={(date) => {
        setCurrent(date.timestamp);
        fetchRecords({
          accessToken,
          from: moment(date.timestamp).startOf('month').format("X"),
          to: moment(date.timestamp).endOf('month').format("X"),
        });
      }}
      selected={'2020-12-03'}
      renderItem={(item) => renderItem(item)}
      renderEmptyDate={() => renderEmptyDate()}
      rowHasChanged={(r1, r2) => {return r1.id !== r2.id}}
      theme={{
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
      }}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default MonthView;
