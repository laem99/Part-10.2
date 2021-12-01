import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
    text: {
        color: 'grey',
        fontSize: 14,
        marginLeft: 20,
    },
    blueText: {
        color: 'white',
    },
    bigText: {
        fontSize: 24,
        fontWeight: '700',
    },
    container: {
        flexDirection: 'row',
    }
});

const FancyText = ({ isBlue, isBig, children }) => {
    const textStyles = [
        styles.text,
        isBlue && styles.blueText,
        isBig && styles.bigText,
    ];

    return <Text style={textStyles}>{children}</Text>;
};

const AppBarTab = () => {
    return (
        <View style={styles.container}>
            <Link to='/'><FancyText isBig isBlue>Repositories</FancyText></Link>
            <Link to='/signin'><FancyText isBig isBlue>Sign In</FancyText></Link>
        </View>
    );
};

export default AppBarTab;