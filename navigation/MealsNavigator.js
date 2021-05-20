import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
            navigationOptions: {
                headerTitle: 'Meal Categories'
            }
        },
        CategoryMeals: { screen: CategoryMealsScreen },
        MealDetail: MealDetailScreen
    },
    {
        //initialRouteName: 'Categories',
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, 
{ defaultNavigationOptions: defaultStackNavOptions }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            //tabBarLabel: 'Favorites!',
            tabBarIcon: (tabInfo) => {
                return <Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.accentColor
        }
    }
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
            //if shifting is false then tabBarColor in tabScreenConfig will not have any effect. To change tabBarColor with shifting: false
            //shifting: false,
            // barStyle: {
            //     backgroundColor: Colors.primaryColor
            // }
        })
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                activeTintColor: Colors.accentColor
            }
        });

      const FiltersNavigator = createStackNavigator({
            Filters: FiltersScreen
        });

const MainNavigator = createDrawerNavigator({
    MealsFavsTab: MealsFavTabNavigator,
    Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);