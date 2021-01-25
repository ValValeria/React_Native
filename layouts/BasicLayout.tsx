import React from 'react';
import { StyleSheet, View } from 'react-native';
import { fontColorDark } from '../constants/Colors';
import { Text } from 'react-native-elements'

export default function (props: { children: any, title: String, isFirstSlide?: Boolean }) {
    const Elem = (elemProps: { children: any }) => {
        if (props.isFirstSlide) {
            return (
                <View style={{...styles.main_container,paddingTop:"53px",minHeight:"100vh"}}>
                    {elemProps.children}
                </View>
            )
        }
        return (<View style={styles.main_container}>
                 {elemProps.children}
               </View>);
    }
    return (
        <Elem>
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <Text h2 style={{ textAlign: 'center', color: fontColorDark }}>
                        {props.title}
                    </Text>
                    <View style={{ paddingTop: "4rem", width: "100%" }}>
                        {props.children}
                    </View>
                </View>
            </View>
        </Elem>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        minheight:"100vh"
    },
    wrap: {
        width: "90%",
        paddingTop: "4rem",
        paddingBottom: "4rem"
    },
    main_container:{
        paddingTop: "54px", height: "100%", width: "100vw", minHeight:"100vh"
    }
})