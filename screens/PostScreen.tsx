import React, { useEffect } from 'react';
import { View } from 'react-native';
import BasicLayout from '../layouts/BasicLayout';
import {useSelector} from 'react-redux';
import { IStore } from '../interfaces';
import { ActivityIndicator } from 'react-native';
import { Card, Image, Text,Button } from 'react-native-elements';
import { Divider } from 'react-native-elements';
import * as WebBrowser from 'expo-web-browser';


export default function PostScreen(props:{navigation:any,route:any}){
    const id = props.route.params.id;

    const post = useSelector((state:{data:IStore})=>{
        return state.data.posts.find(v=>v.id==id)
    });

    const download = async ()=>{
        const url = post?.links.download||"";
        await WebBrowser.openBrowserAsync(url);
    }

    useEffect(()=>{
       if(!post){
           props.navigation.navigate('Home')
       }
    },[id])

    return (
        <View>
            <BasicLayout
                title={"image".toUpperCase()}
                isFirstSlide={true}
            >
                <Image
                    source={{ uri: post?.urls.full }}
                    style={{ width: "100%", minHeight: 200 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                <Card>
                    <Text h4 style={{fontWeight:"500"}}>
                        Author: 
                    </Text>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text h4>
                        {post?.user.name}
                    </Text>
                </Card>
                <Card>
                    <Text h4 style={{ fontWeight: "500" }}>
                        Description:
                    </Text>
                    <Divider style={{ backgroundColor: 'grey' }} />
                    <Text h4>
                        {post?.description}
                    </Text>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Button
                            onPress={() => download()}
                            title="Download"
                            style={{ marginTop: "1rem", maxWidth: "200px" }}
                        />
                    </View>
                </Card>
            </BasicLayout>
        </View>    
    )
}

