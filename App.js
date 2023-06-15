import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, Button, TextInput } from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function App() {
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);
  const [idk, setIDK] = useState(false);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState('');

  const handleCheckboxChange = (checkbox) => {
   if (checkbox === 'yes') {
     setYes(!yes);
     if (!yes) {
       setNo(false);
       setIDK(false);
     }
   } else if (checkbox === 'no') {
     setNo(!no);
     if (!no) {
       setYes(false);
       setIDK(false);
     }
   } else if (checkbox === 'idk') {
     setIDK(!idk);
     if (!idk) {
       setYes(false);
       setNo(false);
     }
   }
 }; 

 const handleClick = () => {
   if ((yes || no || idk) && inputText) {
     setError('Please select only one checkbox or enter additional information, but not both.');
     return;
   }
 
   let output = '';
   if (yes) {
     output = 'Yes';
   } else if (no) {
     output = 'No';
   } else if (idk) {
     output = "I don't know";
   } else if (inputText) {
     output = inputText;
   }
 
   if (output) {
     Alert.alert(output);
     setError('');
   } else {
     setError('Please select a checkbox or enter additional information.');
   }
 };
 
 

  const handleInputChange = (text) => {
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Does the patient have a fever?</Text>
      <View style={styles.checkboxGroup}>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={yes ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange('yes')}
          />
          <Text style={styles.checkboxText}>Yes</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={no ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange('no')}
          />
          <Text style={styles.checkboxText}>No</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <Checkbox
            status={idk ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxChange('idk')}
          />
          <Text style={styles.checkboxText}>I don't know</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputText}
        placeholder="Other"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Next" onPress={handleClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  checkboxGroup: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxText: {
    marginLeft: 8,
  },
  input: {
    height: 40,
    width: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
