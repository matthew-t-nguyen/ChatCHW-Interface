import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultScreen = ({ diagnosis, treatment }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.result}>{diagnosis}</Text>
      <Text style={styles.result}>{treatment}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ResultScreen;
