import React from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';

const FiltersScreen = props => {
    return(
        <View>
            <Text>The Filters Screen!</Text>
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

export default FiltersScreen;