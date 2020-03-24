import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const MortgageAmountInput = props => {
  const onChange = value => {
    const valueWithoutCommas = value.replace(/,/g, '');
    props.setMortgageAmount(Number(valueWithoutCommas));
  };

  return (
    <View>
      <Text style={styles.label}>Mortgage Amount</Text>
      <TextInput
        keyboardType='numeric'
        placeholder={'mortgage amount'}
        style={styles.input}
        onChangeText={onChange}
        value={props.mortgageAmount.toLocaleString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 25,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    fontSize: 20
  }
});

export default MortgageAmountInput;
