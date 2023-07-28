import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import QuestionScreen from './components/QuestionScreen';
import TemperatureScreen from './components/TemperatureScreen';
import ResultScreen from './components/ResultScreen';

const App = () => {
  const [screen, setScreen] = useState('question');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedTemperature, setSelectedTemperature] = useState(null);

  const handleNextQuestion = (answer) => {
    setSelectedAnswer(answer);
    setScreen('temperature');
  };

  const handleNextTemperature = (temperature) => {
    setSelectedTemperature(temperature);
    setScreen('result');
  };

  const handleReset = () => {
    setSelectedAnswer(null);
    setSelectedTemperature(null);
    setScreen('question');
  };

  let currentScreen = null;
  if (screen === 'question') {
    currentScreen = <QuestionScreen onNext={handleNextQuestion} />;
  } else if (screen === 'temperature') {
    currentScreen = <TemperatureScreen onNext={handleNextTemperature} />;
  } else if (screen === 'result') {
    let diagnosis = '';
    let treatment = '';
    if (selectedTemperature === '98.6-100.4') {
      diagnosis = 'Diagnosis: Low-grade fever';
      treatment = 'Treatment: Fluids, cool compress, ibuprofen';
    } else if (selectedTemperature === '100.4-102.2') {
      diagnosis = 'Diagnosis: Moderate grade fever';
      treatment = 'Treatment: Fluids, cool compress, ibuprofen';
    } else if (selectedTemperature === '>102.2') {
      diagnosis = 'Diagnosis: High-grade fever';
      treatment = 'Treatment: Fluids, cool compress, ibuprofen';
    }
    currentScreen = <ResultScreen diagnosis={diagnosis} treatment={treatment} />;
  }

  return (
    <View style={styles.container}>
      {currentScreen}
      {screen === 'result' && (
        <Button title="Reset" onPress={handleReset} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
