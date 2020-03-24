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
import MortgageAmountInput from './components/MortgageAmountInput';
import PaybackYearsInput from './components/PaybackYearsInput';
import InterestRateInput from './components/InterestRateInput';
import Results from './components/Results';

const App: () => React$Node = () => {
  const [mortgageAmount, setMortgageAmount] = useState(400000);
  const [interestRate, setInterestRate] = useState(3);
  const [paybackYears, setPaybackYears] = useState(25);

  const getMonthlyPayment = () => {
    const i = interestRate / 100 / 12; // monthly interest rate
    const p = mortgageAmount;
    const n = paybackYears * 12; // Assuming MONTHLY

    const monthlyPayment = p * ((i * Math.pow((1+i), n))/(Math.pow((1+i), n) - 1));
    return monthlyPayment;
  };

  return (
    <View style={styles.root}>
      <Text style={styles.header}>Mortgage Calculator</Text>
      <MortgageAmountInput
        mortgageAmount={mortgageAmount}
        setMortgageAmount={setMortgageAmount.bind(this)}
      />
      <Text>Interest Rate - {interestRate.toFixed(2)} %</Text>
      <InterestRateInput
        interestRate={interestRate}
        setInterestRate={setInterestRate}
      />
      <PaybackYearsInput
        paybackYears={paybackYears}
        setPaybackYears={setPaybackYears}
      />
      <Results
        monthlyPayment={getMonthlyPayment()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(181,250,156,0.38)',
    height: '100%',
    padding: 20
  },
  header: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 20
  }
});

export default App;
