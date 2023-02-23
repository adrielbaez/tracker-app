import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {COLORS, icons, SIZES} from '../constants';

export const BarHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('back')}>
        <Image source={icons.back_arrow} style={styles.img} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('more')}>
        <Image source={icons.more} style={styles.img} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 30,
  },
});
