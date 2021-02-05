import React from 'react';
import { View } from 'react-native';
import { Header, Text } from 'react-native-elements';

export default function (props: { navigation: any }) {
    return (
        <View style={{ width: "100%", padding: "10px", backgroundColor: "white", borderBottomColor: "rgba(0, 0, 0, 0.15)", borderBottomWidth:"1px"}}>
           <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <View style={{ width: "83%", flex: 1, alignItems: 'center', justifyContent: 'space-between',flexDirection:'row'}}>
                    <View style={{flex:3}}>
                        <Text h4
                            style={{ color: "rgb(47, 56, 87)", textTransform: "uppercase", fontWeight: "600" }}
                            onPress={() => props.navigation.navigate('Home')}
                        >FreeApp</Text>
                    </View>
                    <View style={{flex:1,alignItems:"center",flexDirection:"row"}}>
                        <View>
                            <Text h4 style={{ color: "rgb(47, 56, 87)",marginLeft:"20px" }} onPress={() => props.navigation.navigate('About us')}>About us</Text>
                        </View>
                    </View>
                </View>
           </View>
        </View>
    );
}