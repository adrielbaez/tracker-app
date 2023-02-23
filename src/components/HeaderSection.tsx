import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

export const HeaderSection = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {...FONTS.h2}]}>My expenses</Text>
        <Text style={[styles.text, {...FONTS.h3}]}>Summary (private)</Text>
      </View>
      {/* CALENDAR */}
      <View style={styles.calendarSection}>
        <View style={styles.imgSection}>
          <Image source={icons.calendar} style={styles.img} />
        </View>
        <View>
          <Text style={{...FONTS.h3, color: COLORS.primary}}>11 Nov, 2023</Text>
          <Text style={{...FONTS.body3, color: COLORS.darkgray}}>
            18% more than last month
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  imgSection: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightBlue,
  },
  text: {
    color: COLORS.primary,
  },
  calendarSection: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
});
