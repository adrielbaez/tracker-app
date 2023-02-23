import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {COLORS, FONTS} from '../constants';
import {RenderExpenseItem} from './RenderExpenseItem';

interface Props {
  selectedCategory: any | null;
}

export const IncomingExpenses = ({selectedCategory}: Props) => {
  let allExpenses = selectedCategory ? selectedCategory.expenses : [];
  let incomingExpenses = allExpenses.filter((a: any) => a.status === 'P');
  return (
    <View>
      {incomingExpenses.length > 0 && (
        <FlatList
          data={incomingExpenses}
          renderItem={({item}) => (
            <RenderExpenseItem
              item={item}
              index={item.id}
              selectedCategory={selectedCategory}
            />
          )}
          keyExtractor={item => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

      {incomingExpenses.length === 0 && (
        <View
          style={{alignItems: 'center', justifyContent: 'center', height: 300}}>
          <Text style={{color: COLORS.primary, ...FONTS.h3}}>No Record</Text>
        </View>
      )}
    </View>
  );
};
