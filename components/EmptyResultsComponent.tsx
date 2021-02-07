import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

export default function(){
    return (
        <View>
            <View style={{paddingTop:"0.2rem"}}>
                <Card>
                    <Card.Title>
                        Here you will be able to view posts
                    </Card.Title>
                    <Image source={require("../assets/images/two.webp")} style={styles.image}/>
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  image:{
      width:"100%",
      minHeight:"200px",
      resizeMode:"contain",
      flex: 1,
      alignItems:"center",
      justifyContent:"center"
  }
})