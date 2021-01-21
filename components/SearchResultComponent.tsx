import * as React from 'react';
import { FlatList, View } from 'react-native';
import {connect} from 'react-redux';
import { IResult, IStore, Post } from '../interfaces';
import {Button, Card, Icon, Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from './CardComponent';
import { ActivityIndicator } from 'react-native';

const mapSelectData: (state: { data: IStore }) => IResult = (state: any)=>({
     text: state.data.searchText,
     posts: state.data.posts
})

function SearchResultComponent(props:IResult&{navigation:any}){
    return (
        <View style={{ width: "100%", paddingTop: "1.4rem" }}>
            <SafeAreaView style={{ width: "100%" }}>
                <FlatList
                    data={(props as any).posts}
                    renderItem={(obj:{item:Post})=>{
                       return <CardComponent item={obj.item} navigation={props.navigation}/>
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <Card>
                                <Card.Title>
                                    You are looking for {(props as any).text}
                                </Card.Title>
                            </Card>
                        )
                    }}
                    centerContent={true}
                    ListEmptyComponent={()=>{
                        return <ActivityIndicator size="large"/>
                    }}
                />
            </SafeAreaView>
        </View>
    );
}



export default connect(mapSelectData)(SearchResultComponent);