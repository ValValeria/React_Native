import React from 'react';
import { StyleSheet, View } from 'react-native';
import { fontColorDark } from '../constants/Colors';
import { Text } from 'react-native-elements'

export default function (props: { children: any, title: String, isFirstSlide?: Boolean }) {
    const Elem = (elemProps: { children: any }) => {
        if (props.isFirstSlide) {
            return (
                <View style={{ paddingTop: "54px" }}>
                    {elemProps.children}
                </View>
            )
        }
        return <React.Fragment></React.Fragment>;
    }
    return (
        <Elem>
            <View style={styles.container}>
                <View style={styles.wrap}>
                    <Text h2 style={{ textAlign: 'center', color: fontColorDark}}>
                        {props.title}
                </Text>
                    <View style={{ paddingTop: "4rem" , width:"100%"}}>
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
        backgroundColor: "white"
    },
    wrap: {
        width: "90%",
        paddingTop: "4rem",
        paddingBottom: "4rem"
    }
})