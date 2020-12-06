import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';

import { DetailsItem, LinkedText } from '../components';
import AuthContext from '../context/AuthContext';
import { RootStackParamList } from '../types';

export default function DetailsScreen({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const { closeDetails, details } = React.useContext(AuthContext) as any;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultation Details</Text>
      <DetailsItem title='Patient Name'>{details.patientName}</DetailsItem>
      <DetailsItem title='Doctor Name'>{details.doctorName}</DetailsItem>
      <DetailsItem title='Diagnosis'>{details.diagnosis}</DetailsItem>
      <DetailsItem title='Medication'>{details.medication}</DetailsItem>
      <DetailsItem title='Fee'>${details.fee}</DetailsItem>
      <DetailsItem title='Date'>{moment(details.datetime).format('YYYY-MM-DD HH:mm:ss')}</DetailsItem>
      <DetailsItem title='Need follow up consultation'>{details.followUp ? "Yes" : "No"}</DetailsItem>
      <LinkedText onPress={closeDetails}>Close</LinkedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton:{
    width:"80%",
    backgroundColor:"orange",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});