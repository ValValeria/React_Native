import React from 'react';
import { StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { View } from './Themed';

export default class extends React.PureComponent {
    render() {
        return (
            <View style={styles.top}>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'FreePhotoes', style: { color: '#fff', fontSize:25 } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: "100%",
        minHeight:50,
        zIndex:999999
    },
});