import React from 'react';
import { Button, Card, Icon } from 'react-native-elements';
import { Post } from '../interfaces';

export default (obj:{item:Post,navigation:any}) => {
    const item = obj.item;
    return (
        <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Image source={{ uri: item.image }} />
            <Card.FeaturedSubtitle>
                {item.author}
            </Card.FeaturedSubtitle>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='view now'
                onPress={() => {obj.navigation.navigate("Post",{id:obj.item.id})}} />
        </Card>
    );
};