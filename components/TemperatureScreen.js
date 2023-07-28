import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const TemperatureScreen = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    onNext(selectedOption);
  };

  const renderOption = (option) => {
    const isSelected = option === selectedOption;

    return (
      <TouchableOpacity
        key={option}
        style={[
          styles.optionButton,
          { backgroundColor: isSelected ? 'lightblue' : 'white' },
        ]}
        onPress={() => handleOptionSelect(option)}
      >
        <Text
          style={[
            styles.optionButtonText,
            { color: isSelected ? 'white' : 'black' },
          ]}
        >
          {option}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>What Temperature is the Fever?</Text>
      {renderOption('98.6-100.4')}
      {renderOption('100.4-102.2')}
      {renderOption('>102.2')}
      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'grey',
  },
  optionButtonText: {
    textAlign: 'center',
  },
});

export default TemperatureScreen;
