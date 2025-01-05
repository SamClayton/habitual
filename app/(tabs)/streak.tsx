import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import {Calendar, LocaleConfig} from 'react-native-calendars';

/* basic stats, stressing the consecutive days of the current streak. */
export default function Streak() { 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Streaks</Text>
      <Text style={styles.streak}>Cardio: 5 Days</Text>
      <Text style={styles.streak}>Leetcode: 6 Days</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Calendar
          onDayPress={day => {
            console.log('selected day', day);
          }}
          showWeekNumbers={true}
          hideArrows={true}
          disableMonthChange={true}
          hideExtraDays={true}
          markingType={'period'}
          markedDates={{
            '2025-01-02': {selected: true, startingDay: true, color: 'purple', textColor: 'white'},
            '2025-01-03': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-04': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-05': {selected: true, endingDay: true, color: 'purple', textColor: 'white'},
 
            '2025-01-06': {selected: true, startingDay: true, endingDay: true, color: '#ffbbbb', textColor: 'white'},


            '2025-01-07': {selected: true, startingDay: true, color: 'purple', textColor: 'white'},
            '2025-01-08': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-09': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-10': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-11': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-12': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-13': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-14': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-15': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-16': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-17': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-18': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-19': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-20': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-21': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-22': {selected: true, endingDay: false, color: 'purple', textColor: 'white'},
            '2025-01-23': {selected: true, endingDay: true, color: 'purple', textColor: 'white'},
          }}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    borderWidth: 10,
    padding: 10,
    marginBottom: 40,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  streak: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
  }
});
