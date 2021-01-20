import React from 'react';
import { StyleSheet, View } from 'react-native';
import { fontColorDark } from '../constants/Colors';
import {Text} from 'react-native-elements'

export default function(props:{children: any,title: String}){
    return (
        <View style={styles.container}>
            <View style={styles.wrap}>
                <Text h1 style={{ textAlign: 'center', color: fontColorDark }}>
                    Find your favorite images
                </Text>
                <View>
                    {props.children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flex: 1 ,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    wrap:{
        width:"90%",
        paddingTop:"2rem",
        paddingBottom:"2rem"
    }
})