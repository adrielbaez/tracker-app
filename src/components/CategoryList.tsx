import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {icons, SIZES} from '../constants';
import {categoriesData} from '../utils';
import {Item} from './Item';

interface Props {
  selectedCategory: any | null;
  setSelectedCategory: (item: any) => void;
  showMoreToggle: boolean;
  setShowMoreToggle: (item: boolean) => void;
}

export const CategoryList = ({
  selectedCategory,
  setSelectedCategory,
  showMoreToggle,
  setShowMoreToggle,
}: Props) => {
  const categoryListHeightAnimation = React.useRef(
    new Animated.Value(115),
  ).current;
  return (
    <View
      style={{
        paddingHorizontal: SIZES.padding - 5,
      }}>
      <Animated.View
        style={{
          height: categoryListHeightAnimation,
        }}>
        <View>
          <FlatList
            data={categoriesData}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Item
                item={item}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            )}
            numColumns={2}
          />
        </View>
      </Animated.View>
      {/* button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (showMoreToggle) {
            Animated.timing(categoryListHeightAnimation, {
              toValue: 115,
              duration: 300,
              useNativeDriver: false,
            }).start();
          } else {
            Animated.timing(categoryListHeightAnimation, {
              toValue: 172.5,
              duration: 300,
              useNativeDriver: false,
            }).start();
          }
          setShowMoreToggle(!showMoreToggle);
        }}>
        <Text>{showMoreToggle ? 'LESS' : 'MORE'}</Text>
        <Image
          source={showMoreToggle ? icons.up_arrow : icons.down_arrow}
          style={styles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    marginLeft: 5,
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    marginVertical: SIZES.base,
    justifyContent: 'center',
  },
});
