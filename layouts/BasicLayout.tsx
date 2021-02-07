import React from 'react';
import { StyleSheet, View } from 'react-native';
import { fontColorDark } from '../constants/Colors';
import { Text } from 'react-native-elements'

export default function (props: { children: any, title: String, isFirstSlide?: Boolean }) {
    const Elem = (elemProps: { children: any }) => {
        if (props.isFirstSlide) {
            return (
                <View style={{...styles.main_container,minHeight:"100vh"}}>
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
                    <Text h3 style={{ textAlign: 'center', color: fontColorDark, paddingBottom: "2rem" }}>
                        {props.title.toUpperCase()}
                    </Text>
                    <View style={{ paddingTop: "1rem", width: "100%" }}>
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
    },
    wrap: {
        width: "83%",
        paddingTop: "5rem",
        paddingBottom: "4rem",
        flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: "flex-start"
    },
    main_container:{
        paddingTop: "54px", height: "100%", width: "100vw", minHeight:"100vh",
        flex:1,flexDirection:'column',alignItems:'center',justifyContent:"flex-start"
    }
})