import React from 'react';
import {Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants';

export const HeaderIncomingExpensesTitle = () => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: COLORS.lightGray2,
        padding: SIZES.padding,
      }}>
      {/* Title */}
      <Text style={{...FONTS.h3, color: COLORS.primary}}>
        INCOMING EXPENSES
      </Text>
      <Text style={{...FONTS.body4, color: COLORS.darkgray}}>12 Total</Text>
    </View>
  );
};
