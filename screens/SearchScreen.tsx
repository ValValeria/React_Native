import * as React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Button } from 'react-native-elements';
import { View,StyleSheet, TextInput } from 'react-native';
import SearchResultComponent from '../components/SearchResultComponent';
import { clearPosts, updateSearchText } from '../store/reducer';
import {connect} from 'react-redux'
import { IStore } from '../interfaces';
import { fetchPhotoes } from '../store/actions';

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
         props.changeSearchText(event)
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
                    <View style={{ width: "100%", flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', maxWidth:"100%"}}>
                        <TextInput
                            onChangeText={onChangeText}
                            style={styles.input}
                            maxLength={20}
                            value={props.searchText}
                        />
                        <View style={{ flex: 1, marginLeft: "10px", minWidth: "100px" }}>
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

const styles = StyleSheet.create({
    input:{
         flex: 2, 
         flexBasis: "70%",
         maxWidth:"70%",
         width:"70%",
         padding: "0.7rem",
         lineHeight:2,
         borderRadius:5,
         border:"2px solid #F1F6FB",
         color:"rgb(67, 72, 77)",
         shadowColor:"rgba(100, 100, 111, 0.2)"
    }
})


export default connect(mapStateToProps,mapDispatchToProps)(SearchScreen);