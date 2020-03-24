import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { formatNumber } from '../utils/helperFunctions';

class Results extends React.Component {
  static propTypes = {
    monthlyPayment: PropTypes.number
  };

  render() {
    console.log('this.props.monthlyPayment=', this.props.monthlyPayment);
    // debugger;
    const roundedResult = Math.round(this.props.monthlyPayment);
    return (
      <View style={styles.root}>
        <Text style={styles.header}>Monthly payments will be:</Text>
        <Text style={styles.result}>
          ${formatNumber(roundedResult)}/m
        </Text>
        {
          this.props.monthlyPayment > 4000
            ? <Text style={styles.caption}>Too much for you!!</Text>
            : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  header: {
    textAlign: 'center',
    fontSize: 20
  },
  result: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },
  caption: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
});

export default Results
