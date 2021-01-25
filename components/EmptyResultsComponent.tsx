import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';

export default function(){
    return (
        <View>
            <View style={{paddingTop:"2rem"}}>
                <Card>
                    <Card.Title>
                        Here you will be able to view posts
                    </Card.Title>
                </Card>
            </View>
        </View>
    );
}