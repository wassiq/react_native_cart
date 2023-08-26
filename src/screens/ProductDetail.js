import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import {useDispatch} from 'react-redux';
import {addItemToWishList} from '../redux/slices/WishlistSlice';
import {addItemToCart} from '../redux/slices/CartSlice';
import CustomText from '../components/CustomText';

const ProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../images/back.png')}
        rightIcon={require('../images/cart.png')}
        title={'Product Detail'}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        isCart={true}
      />
      <ScrollView>
        <Image source={{uri: route.params.data.image}} style={styles.banner} />
        <CustomText style={styles.title}>{route.params.data.title}</CustomText>
        <CustomText style={styles.desc}>
          {route.params.data.description}
        </CustomText>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CustomText style={[styles.price, {color: '#000'}]}>
            {'Price:'}
          </CustomText>
          <CustomText style={styles.price}>
            {' $' + route.params.data.price}
          </CustomText>
          <View style={styles.qtyView}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}>
              <CustomText style={{fontSize: 18, fontWeight: '600'}}>
                -
              </CustomText>
            </TouchableOpacity>
            <CustomText style={styles.qty}>{qty}</CustomText>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                setQty(qty + 1);
              }}>
              <CustomText style={{fontSize: 18, fontWeight: '600'}}>
                +
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={() => {
            dispatch(addItemToWishList(route.params.data));
          }}>
          <Image
            source={require('../images/wishlist.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <CustomButton
          bg={'#FF9A0C'}
          title={'Add To Cart'}
          color={'#fff'}
          onClick={() => {
            dispatch(
              addItemToCart({
                category: route.params.data.category,
                description: route.params.data.description,
                id: route.params.data.id,
                image: route.params.data.image,
                price: route.params.data.price,
                qty: qty,
                rating: route.params.data.rating,
                title: route.params.data.title,
              }),
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 300,
    resizeMode: 'center',
  },
  title: {
    fontSize: 23,
    color: '#000',
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 20,
  },
  desc: {
    fontSize: 16,

    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  price: {
    color: 'green',
    marginLeft: 20,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '800',
  },
  wishlistBtn: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: '#E2DFDF',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
  },
  qtyView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  btn: {
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    marginLeft: 10,
  },
  qty: {
    marginLeft: 10,
    fontSize: 18,
  },
});
