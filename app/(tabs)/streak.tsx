import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import {Calendar, LocaleConfig} from 'react-native-calendars';

export default function Streak() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Streak</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>Put basic stats, stressing the
        consecutive days of the current streak.</Text>

        <Calendar
          onDayPress={day => {
            console.log('selected day', day);
          }}
          markedDates={{
            '2025-01-01': {selected: true, marked: true, selectedColor: 'purple'},
            '2025-01-02': {marked: true},
            '2025-01-03': {selected: true, marked: true, selectedColor: 'purple'}
          }}
        />
      <Text style={styles.streak}>Cardio: 18 Days</Text>
      <Text style={styles.streak}>Leetcode: 6 Days</Text>
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
    padding: 10
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
  }
});
