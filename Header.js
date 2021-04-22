import React from 'react';
import { StyleSheet, Text, View, PixelRatio} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '8%',
        paddingTop: 25*PixelRatio.get(),
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 15*PixelRatio.get(),
        fontWeight: 'bold'
    }
});

export default Header;
