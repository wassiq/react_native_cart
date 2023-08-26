import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
const CustomButton = ({bg, title, onClick, color}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: bg}]}
      onPress={() => {
        onClick();
      }}>
      <CustomText style={{color: color, fontSize: 18, fontWeight: '500'}}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width - 40,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
});
