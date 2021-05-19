import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return(
        <View>
            <Text>The Category Meals Screen!</Text>
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