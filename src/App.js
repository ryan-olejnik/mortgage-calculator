/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert
} from 'react-native';
import Slider from '@react-native-community/slider';

const App: () => React$Node = () => {
  const [mortgageAmount, setMortgageAmount] = useState(100000);
  const [interestRate, setInterestRate] = useState(3);
  const [paybackYears, setPaybackYears] = useState(25);

  const getMonthlyPayment = () => {
    const i = interestRate / 100 / 12; // monthly interest rate
    const p = mortgageAmount;
    const n = paybackYears * 12; // Assuming MONTHLY

    const monthlyPayment = p * ((i * Math.pow((1+i), n))/(Math.pow((1+i), n) - 1));
    return monthlyPayment.toFixed(0);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Mortgage Calculator</Text>
      <TextInput
        placeholder={'mortgage amount'}
        style={{borderWidth: 1, borderColor: 'black', marginBottom: 25}}
        onChangeText={value => setMortgageAmount(Number(value))}
        value={String(mortgageAmount)}
      />
      <Text>Interest Rate - {interestRate.toFixed(2)} %</Text>
      <Slider
        step={0.01}
        minimumValue={0}
        maximumValue={6}
        value={interestRate}
        onValueChange={slideValue => setInterestRate(slideValue)}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
        style={{marginBottom: 20}}
      />
      <TextInput
        placeholder={'Payback Years'}
        style={{borderWidth: 1, borderColor: 'black', marginBottom: 25}}
        onChangeText={value => setPaybackYears(Number(value))}
        value={String(paybackYears)}
      />
      <View style={styles.results}>
        <Text style={{textAlign: 'center'}}>Monthly payments will be:</Text>
        <Text style={{textAlign: 'center'}}>${getMonthlyPayment()}/m</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // backgroundColor: '#8cacfa',
    height: '100%',
    padding: 20,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
  },
  results: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  },
});

export default App;
