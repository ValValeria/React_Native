import * as React from 'react';
import { FlatList, View } from 'react-native';
import {connect} from 'react-redux';
import { IResult, IStore, Post } from '../interfaces';
import {Button, Card, Icon, Text} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';
import CardComponent from './CardComponent';
import { ActivityIndicator } from 'react-native';
import EmptyResultsComponent from './EmptyResultsComponent';
import ListFooterComponent from './ListFooterComponent';
import { changePageNum, updateSearchText } from '../store/reducer';

const mapSelectData: (state: { data: IStore }) => IResult = (state: any)=>({
     text: state.data.searchText,
     posts: state.data.posts as Post[]
})

function mapDispatchToProps(dispatch: any) {
    return {
        changeSearchText: (text: string) => dispatch(updateSearchText(text)),
        changePage: () => dispatch(changePageNum())
    };
}

function SearchResultComponent(props:IResult&{navigation:any,isTouched:boolean}){
    return (
        <View style={{ width: "100%", paddingTop: "2rem" }}>
            <SafeAreaView style={{ width: "100%" }}>
                <FlatList
                    style={{paddingTop:"1rem"}}
                    
                    data={props.posts}

                    renderItem={(obj:{item:Post})=>{
                       return <CardComponent item={obj.item} navigation={props.navigation}/>
                    }}

                    ListHeaderComponent={() => {
                        return (
                            <Card>
                                <Card.Title>
                                    You are looking for {props.text}
                                </Card.Title>
                            </Card>
                        )
                    }}

                    centerContent={true}

                    ListEmptyComponent={()=>{
                        if(props.isTouched){
                            return (
                                <View style={{paddingTop:"2rem"}}>
                                    <ActivityIndicator size="large" />
                                </View>
                            )
                        } else {
                            return <EmptyResultsComponent/>;
                        }
                    }}
                    ListFooterComponent={()=>{
                        if(props.posts.length){
                            return <ListFooterComponent/>;
                        } 
                        return null;
                    }}
                    onEndReachedThreshold={100}
                />
            </SafeAreaView>
        </View>
    );
}



export default connect(mapSelectData,mapDispatchToProps)(SearchResultComponent);