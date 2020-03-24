import React from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';

const InterestRateInput = props => {
  return (
    <View>
      <Slider
        step={0.01}
        minimumValue={0}
        maximumValue={6}
        value={props.interestRate}
        onValueChange={slideValue => props.setInterestRate(slideValue)}
        minimumTrackTintColor="#1fb28a"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="#b9e4c9"
        style={{ marginBottom: 20 }}
      />
    </View>
  );
};

export default InterestRateInput;
