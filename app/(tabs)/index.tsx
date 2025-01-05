import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';

import Star from '@/components/StarButton';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* TODO: align this to the top even when it's empty */}
      <Text style={styles.title}>Remaining today</Text>

      <Star color="skyblue" size={75} />
      <Text style={styles.activity}>Cardio</Text>

      <Star color="darkviolet" size={75} />
      <Text style={styles.activity}>Leetcode</Text>

      <Star color="pink" size={75} />
      <Text style={styles.activity}>15 min yoga</Text>

      <Star color="orange" size={75} />
      <Text style={styles.activity}>Learn Spanish</Text>

      <View style={styles.separator}  lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <Text style={styles.title}>Completed today</Text>
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
    margin: 25
  },
  activity: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  star: {
    margin: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});
