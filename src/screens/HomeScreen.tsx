import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';
import {
  BarHeader,
  CategoryList,
  CategorySection,
  ChartSection,
  HeaderIncomingExpensesTitle,
  HeaderSection,
  IncomingExpenses,
} from '../components';
import {COLORS} from '../constants';

export const HomeScreen = () => {
  const [viewMode, setviewMode] = useState<'chart' | 'list'>('chart');
  const [selectedCategory, setSelectedCategory] = useState<any | null>(null);
  const [showMoreToggle, setShowMoreToggle] = useState(false);

  console.log(selectedCategory);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.lightGray,
      }}>
      <BarHeader />
      <HeaderSection />
      <CategorySection viewMode={viewMode} setviewMode={setviewMode} />
      {viewMode === 'list' && (
        <>
          <CategoryList
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setShowMoreToggle={setShowMoreToggle}
            showMoreToggle={showMoreToggle}
          />
          <HeaderIncomingExpensesTitle />
          <ScrollView>
            <IncomingExpenses selectedCategory={selectedCategory} />
          </ScrollView>
        </>
      )}
      {viewMode === 'chart' && (
        <ChartSection
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      )}
    </View>
  );
};
