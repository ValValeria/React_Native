import * as React from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { Button, Card, Icon, Input, SearchBar, Text } from 'react-native-elements';
import { GestureResponderEvent, Platform, StyleSheet, View } from 'react-native';
import SearchResultComponent from '../components/SearchResultComponent';
import { useDispatch } from 'react-redux';
import ModelComponent, { MODEL_STATE } from '../components/ModelComponent';


export default function (props: { navigation: any }) {
    const [text, updateText] = React.useState('');
    const dispatch = useDispatch();

    const submit = (event: GestureResponderEvent) => {
        if (text.length < 3) {
            MODEL_STATE.next(true)
        }
    }

    return (
        <View>
            <BasicLayout
                title={'Find your favorite images'}
                isFirstSlide={true}
            >
                <View>
                    <View style={{ width: "100%", flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <SearchBar
                            placeholder={text}
                            style={{ flex: 2 }}
                            lightTheme={true}
                            onChangeText={(e) => {
                                updateText((text) => {
                                    const newText = text.concat(e);
                                    return newText;
                                });
                            }}
                            editable={true}
                            autoCorrect={true}
                        />
                        <View style={{ flex: 1, marginLeft: "10px", maxWidth: "30%" }}>
                            <Button
                                title="Search"
                                onPress={submit}
                                raised
                            />
                        </View>
                    </View>
                    <SearchResultComponent navigation={props.navigation} />
                </View>
            </BasicLayout>
            <ModelComponent>
                <Card.Title>
                    Warning
                </Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                   The text must be more than 3 characters
                </Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='close'
                    onPress={()=>{
                        MODEL_STATE.next(false)
                    }} />
            </ModelComponent>
        </View>
    );
}

