import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class BasicLayout extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.wrap}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        minHeight:"50vh",
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