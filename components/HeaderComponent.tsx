import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

export default function (props: { navigation: any }) {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: "83%", flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={{ flex: 3 }}>
                        <Text h4
                            style={{ color: "rgb(47, 56, 87)", textTransform: "uppercase", fontWeight: "600" }}
                            onPress={() => props.navigation.navigate('Home')}
                        >FreeApp</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center", flexDirection: "row" }}>
                        <View>
                            <Text h4 style={{ color: "rgb(47, 56, 87)", marginLeft: "20px" }} onPress={() => props.navigation.navigate('AboutUs')}>About us</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: "100%", 
        padding: "20px", 
        backgroundColor: "white",
        shadowColor: "#BCBEC0",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.50,
        shadowRadius: 12.35,
        elevation: 19,
    }
})