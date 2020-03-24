import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const PaybackYearsInput = props => {
  return (
    <View>
      <Text style={styles.label}>Payback Years</Text>
      <TextInput
        keyboardType='numeric'
        placeholder={'Payback Years'}
        style={styles.input}
        onChangeText={value => props.setPaybackYears(Number(value))}
        value={String(props.paybackYears)}
      />
    </View>
  );
}

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
  },
});

export default PaybackYearsInput
