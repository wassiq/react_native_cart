import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import CustomText from '../../components/CustomText';

const User = () => {
  return (
    <View style={styles.container}>
      <Header title={'Profile'} />
      <Image
        source={require('../../images/default_user.png')}
        style={styles.user}
      />
      <CustomText style={styles.name}>{'Wasiq'}</CustomText>
      <CustomText style={[styles.name, {fontSize: 16, marginTop: 0}]}>
        {'wasiqali4444@gmail.com'}
      </CustomText>
      <TouchableOpacity style={[styles.tab, {marginTop: 40}]}>
        <CustomText style={styles.txt}>Edit Profile</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <CustomText style={styles.txt}>Orders</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <CustomText style={styles.txt}>Address</CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.tab, {marginTop: 10}]}>
        <CustomText style={styles.txt}>Payment Methods</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default User;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  user: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 50,
  },
  name: {
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  tab: {
    width: '90%',
    height: 50,
    borderBottomWidth: 0.3,
    alignSelf: 'center',
    borderBottomColor: '#DBDBDB',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  txt: {
    color: '#000',
  },
});
