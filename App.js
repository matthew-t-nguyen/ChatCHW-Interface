import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        <Text style={styles.headerText}>
          Hello,
        </Text>
        <Text style={styles.questionText}>
          {'\n'}
          {'\n'}
          How can I help you today?
        </Text>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Arial',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
  },
  questionText: {
    fontSize: 18,
  }
});