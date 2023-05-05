import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonsLayout from './components/ButtonsLayout';
import React, { useState } from 'react';
import Output from './components/Output';

export default function App() {

  const [outputText, setOutputText] = useState('');
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState('');

  const handleButtonPress = (value) => {
    switch (value) {
      case 'C':
        setOutputText('0');
        setCurrentValue(0);
        setOperator('');
        break;
      case '+/-':
        const toggledValue = parseFloat(outputText) * -1;
        setOutputText(toggledValue.toString());
        break;
      case '%':
        const percentageValue = parseFloat(outputText) / 100;
        setOutputText(percentageValue.toString());
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        setCurrentValue(parseFloat(outputText));
        setOperator(value);
        setOutputText('');
        break;
      case '=':
        if (operator === '') {
          break;
        }
        const nextValue = parseFloat(outputText);
        let result = 0;
        switch (operator) {
          case '/':
            result = currentValue !== 0 ? currentValue / nextValue : 0;
            break;
          case '*':
            result = currentValue * nextValue;
            break;
          case '-':
            result = currentValue - nextValue;
            break;
          case '+':
            result = currentValue + nextValue;
            break;
        }
        setOutputText(result.toString());
        setCurrentValue(result);
        setOperator('');
        break;
      default:
        const newOutputText = outputText === '0' ? value : outputText + value;
        setOutputText(newOutputText);
        break;
    }
  };



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Output outputText={outputText} />
      <ButtonsLayout handleButtonPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  output: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',

  },
  outputView: {
    marginTop: 275,
    flexDirection: 'row',

  }
});
