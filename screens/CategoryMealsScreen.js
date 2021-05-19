import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(category => category.id === categoryId);
    
    return(
        <View>
            <Text>The Category Meals Screen!</Text>
            <Text>Selected Category: {selectedCategory.title} </Text>
            <Button title="Go to Meal Detail!" onPress={() => {
                props.navigation.navigate('MealDetail');
                //props.navigation.push('MealDetail');
            }} />

            <Button title="Go Back" onPress= {() => {
                props.navigation.goBack();
                //props.navigation.pop();
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;