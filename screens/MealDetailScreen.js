import React from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';

const MealDetailScreen = props => {
    return(
        <View>
            <Text>The Meal Detail Screen!</Text>
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

export default MealDetailScreen;