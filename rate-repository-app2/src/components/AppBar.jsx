import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flexGrow: 0.07,
        flexShrink: 1,
        backgroundColor: '#24292e',
        flexDirection: 'row',
    },
});

const AppBar = () => {
    return <View style={styles.container}>
        <ScrollView style={{ flexDirection: 'row' }} horizontal>
            <AppBarTab />
        </ScrollView>
    </View>;
};

export default AppBar;