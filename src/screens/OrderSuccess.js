import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {emptyCart} from '../redux/slices/CartSlice';
import {useDispatch} from 'react-redux';
import CustomText from '../components/CustomText';
const OrderSuccess = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Image source={require('../images/checked.png')} style={styles.icon} />
      <CustomText style={styles.msg}>Order Placed Successfully...</CustomText>
      <CustomText
        style={styles.btn}
        onPress={() => {
          dispatch(emptyCart([]));
          navigation.navigate('Main');
        }}>
        Go TO Home
      </CustomText>
    </View>
  );
};

export default OrderSuccess;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 100,
    height: 100,
  },
  msg: {
    marginTop: 20,
    fontSize: 16,
    color: '#000',
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    color: '#000',
    marginTop: 20,
  },
});
