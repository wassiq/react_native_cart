import React from 'react';
import {Text, StyleSheet} from 'react-native';

import {Colors} from '../styles';
function CustomText({children, style, onPress, numberOfLines}) {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[styles.customText, style]}>
      {children}
    </Text>
  );
}

export default CustomText;
const styles = StyleSheet.create({
  customText: {
    color: Colors.BLACK,
    ...Platform.select({
      ios: {
        fontSize: 20,
      },
      android: {
        fontSize: 16,
      },
    }),
  },
});
