import * as React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Button, SearchBar, Text } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
import { fontColorDark } from '../constants/Colors';
import SearchResultComponent from '../components/SearchResultComponent';
import { useDispatch } from 'react-redux';
import { updateSearchText } from '../store/reducer';


export default function () {
    const [text, updateText] = React.useState('');
    const dispatch = useDispatch();

    return (
        <View style={{paddingTop:"3.2rem"}}>
            <BasicLayout
                title={'Find your favorite images'}
            >
                <View style={{ paddingTop: "2rem" }} >
                    <View style={{ width: "100%", flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <SearchBar
                            placeholder={text}
                            lightTheme={true}
                            style={{ flexBasis: '70%', width: "70%" }}
                            onChangeText={(e) => {
                                updateText((text) => {
                                    const newText = text.concat(e);
                                    return newText;
                                });
                            }}
                        />
                        <View style={{ marginLeft: "10px" }}>
                            <Button
                                title="Search"
                                raised
                            />
                        </View>
                    </View>
                    <SearchResultComponent />
                </View>
            </BasicLayout>
        </View>
    );
}

