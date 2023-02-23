import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {categoriesData} from '../utils';
import {IComponent} from './interfaces';

export const CategorySection = ({viewMode, setviewMode}: IComponent) => {
  return (
    <View style={styles.container}>
      {/* title */}
      <View>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.h3,
          }}>
          Categories
        </Text>
        <Text
          style={{
            color: COLORS.darkgray,
            ...FONTS.body4,
          }}>
          {categoriesData.length} total
        </Text>
      </View>
      {/* buttons */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                viewMode === 'chart' ? COLORS.secondary : COLORS.white,
            },
          ]}
          onPress={() => setviewMode!('chart')}>
          <Image
            style={[
              styles.img,
              {
                tintColor:
                  viewMode === 'chart' ? COLORS.white : COLORS.darkgray,
              },
            ]}
            source={icons.chart}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                viewMode === 'list' ? COLORS.secondary : COLORS.white,
            },
          ]}
          onPress={() => setviewMode!('list')}>
          <Image
            style={[
              styles.img,
              {
                tintColor: viewMode === 'list' ? COLORS.white : COLORS.darkgray,
              },
            ]}
            source={icons.menu}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SIZES.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: 20,
    height: 20,
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
