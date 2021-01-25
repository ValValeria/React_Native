import * as React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Button, Card, Icon, Input, SearchBar, Text } from 'react-native-elements';
import { View } from 'react-native';
import SearchResultComponent from '../components/SearchResultComponent';
import ModelComponent, { MODEL_STATE } from '../components/ModelComponent';
import { clearPosts, updateSearchText } from '../store/reducer';
import {connect} from 'react-redux'
import { IStore } from '../interfaces';
import { fetchPhotoes } from '../store/actions';
import { unwrapResult } from '@reduxjs/toolkit';

function mapDispatchToProps(dispatch: any) {
    return {
        changeSearchText: (text: string) => dispatch(updateSearchText(text)),
        submit:() =>{
            dispatch(clearPosts())
            return dispatch(fetchPhotoes()) as Promise<any>
        }
    };
}

function mapStateToProps(state: {data:IStore}) {
    return {
        searchText: state.data.searchText as string
    };
}

function SearchScreen(props: { navigation: any, searchText: string, changeSearchText: any, submit:()=>any}) {

    const onChangeText = (event: string) => {
         props.changeSearchText(props.searchText.concat(event))
    }

    const [isTouched,updateTouch] = React.useState(false);

    const onSubmit = ()=>{
         if(props.searchText.length>3){
             updateTouch(false);
             props.submit()
         }
    }

    return (
        <View>
            <BasicLayout
                title={'Find your favorite images'}
                isFirstSlide={true}
            >
                <View >
                    <View style={{ width: "100%", flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <SearchBar
                            placeholder={props.searchText}
                            style={{ flex: 2,minWidth:"70%",flexBasis:"70%" }}
                            lightTheme={true}
                            onChangeText={onChangeText}
                            editable={true}
                            autoCorrect={true}
                        />
                        <View style={{ flex: 1, marginLeft: "10px", maxWidth: "100px" }}>
                            <Button
                                title="Search"
                                onPress={onSubmit}
                                raised
                            />
                        </View>
                    </View>
                    <SearchResultComponent navigation={props.navigation} isTouched={isTouched}/>
                </View>
            </BasicLayout>
        </View>
    );
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen);