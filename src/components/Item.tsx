import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

interface Props {
  item: any;
  selectedCategory: any | null;
  setSelectedCategory: (item: any) => void;
}

export const Item = ({item, setSelectedCategory}: Props) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        flexDirection: 'row',
        margin: 5,
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.radius,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}
      onPress={() => setSelectedCategory(item)}>
      <Image style={[styles.img, {tintColor: item.color}]} source={item.icon} />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
  text: {
    marginLeft: SIZES.base,
    color: COLORS.primary,
    ...FONTS.h4,
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
});
