import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addProducts} from '../../redux/slices/ProductsSlice';
import {fetchProducts} from '../../utils/ApiService';
import CustomText from '../../components/CustomText';
const Home = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    fetchProducts().then(res => {
      setProducts(res);
      res.map(item => {
        item.qty = 1;
      });
      dispatch(addProducts(res));
    });
  };
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../../images/menu.png')}
        rightIcon={require('../../images/cart.png')}
        title={'Grocery App'}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        isCart={true}
      />
      <FlatList
        data={products}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.productItem}
              onPress={() => {
                navigation.navigate('ProductDetail', {data: item});
              }}>
              <Image source={{uri: item.image}} style={styles.itemImage} />
              <View>
                <CustomText style={styles.name}>
                  {item.title.length > 25
                    ? item.title.substring(0, 25) + '...'
                    : item.title}
                </CustomText>
                <CustomText style={styles.desc}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </CustomText>
                <CustomText style={styles.price}>{'$' + item.price}</CustomText>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    width: Dimensions.get('window').width,
    height: 100,
    marginTop: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
  },
  desc: {
    marginLeft: 20,
  },
  price: {
    color: 'green',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 5,
  },
});
