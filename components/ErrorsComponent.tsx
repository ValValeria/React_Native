import React, { useEffect } from 'react';
import { Animated, View, Text, StyleSheet, Easing } from 'react-native';

export default function(props:{errors:string[]}){

    useEffect(()=>{
        fadeIn();

        return ()=>{
            fadeOut();
        };
    },[])

    const state = {
        fadeAnim: new Animated.Value(0)
    };

    const fadeIn = () => {
        Animated.timing(state.fadeAnim, {
            toValue: 1,
            duration: 5000,
            delay:0,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(state.fadeAnim, {
            toValue: 0,
            duration: 5000,
            delay: 0,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
        }).start();
    };

    return (
        <Animated.View
            style={
                {
                    opacity: state.fadeAnim
                }
            }
        >
            <View style={{ width: "100%", flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth: "100%" }}>
                {
                    props.errors.map(v => {
                        return <Text style={styles.error} key={v}>{v}</Text>;
                    })
                }
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "white",
        padding: 10,
        backgroundColor: "#F6522E",
        marginBottom: 7,
        marginTop: 7,
        fontSize: 16.9,
        width: "100%"
    }
})


//https://blog.codecentric.de/en/2019/07/react-native-animated-with-hooks/
//https://reactnative.dev/docs/animated