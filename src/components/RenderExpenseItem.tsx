import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

interface Props {
  index: number;
  item: any;
  selectedCategory: any;
}

export const RenderExpenseItem = ({item, index, selectedCategory}: Props) => {
  return (
    <View
      style={{
        width: 300,
        marginRight: SIZES.padding,
        marginLeft: index === 0 ? SIZES.padding : 0,
        marginVertical: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...styles.shadow,
      }}>
      {/* Title */}
      <View
        style={{
          flexDirection: 'row',
          padding: SIZES.padding,
          alignItems: 'center',
        }}>
        <View
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor: COLORS.lightGray,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: SIZES.base,
          }}>
          <Image
            source={selectedCategory.icon}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedCategory.color,
            }}
          />
        </View>

        <Text style={{...FONTS.h3, color: selectedCategory.color}}>
          {selectedCategory.name}
        </Text>
      </View>

      {/* Expense Description */}
      <View style={{paddingHorizontal: SIZES.padding}}>
        {/* Title and description */}
        <Text style={{...FONTS.h2}}>{item.title}</Text>
        <Text
          style={{...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray}}>
          {item.description}
        </Text>

        {/* Location */}
        <Text style={{marginTop: SIZES.padding, ...FONTS.h4}}>Location</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={icons.pin}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.darkgray,
              marginRight: 5,
            }}
          />
          <Text
            style={{
              marginBottom: SIZES.base,
              color: COLORS.darkgray,
              ...FONTS.body4,
            }}>
            {item.location}
          </Text>
        </View>
      </View>

      {/* Price */}
      <View
        style={{
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomStartRadius: SIZES.radius,
          borderBottomEndRadius: SIZES.radius,
          backgroundColor: selectedCategory.color,
        }}>
        <Text style={{color: COLORS.white, ...FONTS.body3}}>
          CONFIRM {item.total.toFixed(2)} USD
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
