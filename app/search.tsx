import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { Search, ArrowLeft, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { COLORS, FONTS, SIZES } from '@/constants/theme';
import { restaurants, cuisines } from '@/data/mockData';
import RestaurantCard from '@/components/RestaurantCard';

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = searchQuery === '' || 
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.cuisine.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesFilter = activeFilter === 'All' || 
      restaurant.cuisine.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeft size={24} color={COLORS.text} />
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <Search size={20} color={COLORS.textLight} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search restaurants or cuisines..."
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <X size={18} color={COLORS.textLight} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Cuisine Filters */}
      <View style={styles.filtersContainer}>
        <FlatList
          data={['All', ...cuisines]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.filterButton,
                activeFilter === item && styles.activeFilterButton
              ]}
              onPress={() => setActiveFilter(item)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === item && styles.activeFilterText
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.filtersList}
        />
      </View>

      {/* Results */}
      {filteredRestaurants.length > 0 ? (
        <FlatList
          data={filteredRestaurants}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <RestaurantCard
              restaurant={item}
              onPress={() => router.push(`/restaurant/${item.id}`)}
            />
          )}
          contentContainerStyle={styles.resultsList}
        />
      ) : (
        <View style={styles.noResultsContainer}>
          <Text style={styles.noResultsText}>No restaurants found</Text>
          <Text style={styles.noResultsSubtext}>
            Try a different search term or filter
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding * 5,
    paddingBottom: SIZES.padding,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    borderRadius: SIZES.radius,
    marginLeft: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    height: 46,
  },
  searchInput: {
    flex: 1,
    ...FONTS.body3,
    marginLeft: 8,
    color: COLORS.text,
  },
  filtersContainer: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  filtersList: {
    paddingHorizontal: SIZES.padding,
    paddingBottom: SIZES.padding,
  },
  filterButton: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: 8,
    borderRadius: SIZES.radius,
    marginRight: 8,
    backgroundColor: COLORS.lightGray,
  },
  activeFilterButton: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    ...FONTS.body3,
    color: COLORS.text,
  },
  activeFilterText: {
    color: COLORS.white,
  },
  resultsList: {
    paddingTop: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  noResultsText: {
    ...FONTS.h2,
    marginBottom: SIZES.padding,
  },
  noResultsSubtext: {
    ...FONTS.body3,
    color: COLORS.textLight,
    textAlign: 'center',
  },
});