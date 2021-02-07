import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import { View } from '../components/Themed';
import { fontColorDark } from '../constants/Colors';

export default function () {

    return (
        <ScrollView
            style={{ flex: 1,backgroundColor:"white",paddingTop:"2rem" }}
            centerContent={true}
            contentInset={{top:20,left:20,right:20,bottom:20}}
            contentContainerStyle={{flex:1, alignItems: "center", paddingTop:"1.3rem",justifyContent: "center"}}
        >
            <View style={{width:"83%",maxWidth:"900px"}}>
                <Text h3 style={{ textAlign: 'center', color: fontColorDark, paddingBottom: "2rem" }}>
                    {"Showcasing the best things being".toUpperCase()}
                </Text>
                <Text h4 style={styles.text}>
                    Founded in 2018, FreeImages has grown into an industry-leading visual community. It’s become a source of inspiration for everyone from award-winning writers.
                </Text>
                <View style={{ flex: 1, alignItems: "center", paddingTop: "1.3rem", justifyContent: "center",flexDirection:"column"}}>
                    <Image source={require("../assets/images/remix1.jpg")} style={styles.image} />
                    <Image source={require("../assets/images/remix2.jpg")} style={styles.image} />
                    <Image source={require("../assets/images/remix4.jpg")} style={styles.image} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center",
        color: "rgb(47, 56, 87)",
        paddingBottom:"1rem",
    },
    image: {
        width: "100%",
        minHeight: "300px",
        maxHeight:"400px",
        resizeMode: "cover",
        flex: 1,
        marginTop:10
    }
})