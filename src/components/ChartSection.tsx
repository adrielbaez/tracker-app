import React, {useRef} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {VictoryPie} from 'victory-native';
import {Svg} from 'react-native-svg';
import {FONTS, SIZES} from '../constants';
import {categoriesData, filterData} from '../utils';
import {SummaryItem} from './SummaryItem';

interface Props {
  setSelectedCategory: (category: any) => void;
  selectedCategory: any;
}

export const ChartSection = ({
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  const chartData = filterData();
  let colorScales = chartData.map(item => item.color);
  let totalExpenseCount = chartData.reduce(
    (a, b) => a + (b.expenseCount || 0),
    0,
  );

  const setSelectCategoryByName = (name: string) => {
    let category = categoriesData.filter(a => a.name === name);
    setSelectedCategory(category[0]);
  };
  return (
    <ScrollView>
      <View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Svg
            width={SIZES.width}
            height={SIZES.width}
            style={{width: '100%', height: 'auto'}}>
            <VictoryPie
              standalone={false} // Android workaround
              data={chartData}
              labels={datum => `${datum.y}`}
              radius={({datum}) =>
                selectedCategory && selectedCategory.name == datum.name
                  ? SIZES.width * 0.4
                  : SIZES.width * 0.4 - 10
              }
              innerRadius={70}
              labelRadius={({innerRadius}) =>
                (SIZES.width * 0.4 + innerRadius) / 2.5
              }
              style={{
                labels: {fill: 'white', ...FONTS.body3},
                parent: {borderRadius: 15},
              }}
              width={SIZES.width}
              height={SIZES.width}
              colorScale={colorScales}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: props => {
                            let categoryName = chartData[props.index].name;
                            setSelectCategoryByName(categoryName);
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
          </Svg>
          <View style={{position: 'absolute', top: '42%', left: '42%'}}>
            <Text style={{...FONTS.h1, textAlign: 'center'}}>
              {totalExpenseCount}
            </Text>
            <Text style={{...FONTS.body3, textAlign: 'center'}}>Expenses</Text>
          </View>
        </View>
      </View>
      <View style={{padding: SIZES.padding}}>
        <FlatList
          data={chartData}
          horizontal
          renderItem={({item}) => (
            <SummaryItem
              item={item}
              selectedCategory={selectedCategory}
              setSelectCategoryByName={setSelectCategoryByName}
            />
          )}
          keyExtractor={item => `${item.id}`}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
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
