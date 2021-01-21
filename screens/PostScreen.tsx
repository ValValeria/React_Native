import React, { useEffect } from 'react';
import { View } from 'react-native';
import BasicLayout from '../layouts/BasicLayout';
import {connect, useSelector} from 'react-redux';
import { IStore, Post } from '../interfaces';
import { ActivityIndicator } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';
import { Divider } from 'react-native-elements';



export default function PostScreen(props:{navigation:any,route:any}){
    const id = props.route.params.id;

    const post = useSelector((state:{data:IStore})=>{
        return state.data.posts.find(v=>v.id==id)
    });

    useEffect(()=>{
       if(!post){
           props.navigation.navigate('Home')
       }
    },[id])

    return (
        <View>
            <BasicLayout
                title={post?.title||""}
                isFirstSlide={true}
            >
                <Image
                    source={{ uri: post?.image }}
                    style={{ width: "100%", minHeight: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Card>
                    <Text h4 style={{fontWeight:"500"}}>
                        Author: 
                    </Text>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text h4>
                        {post?.author}
                    </Text>
                </Card>
                <Card>
                    <Text h4 style={{ fontWeight: "500" }}>
                        Description:
                    </Text>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text h4>
                        Very beautiful image
                    </Text>
                </Card>
            </BasicLayout>
        </View>    
    )
}

