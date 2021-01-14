import React from 'react';
import {StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';
import { View } from './Themed';

export default class extends React.PureComponent{
    render(){
        return(
            <View style={styles.top}>
                  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        position: 'absolute',
        left: 0,
        top: 0,
        width:"100%",
        height:"50px"
    },
});