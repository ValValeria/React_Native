import React from 'react';
import {StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { fontColorDark } from '../constants/Colors';


export default class BannerComponent extends React.PureComponent {
  static propTypes: any;
  constructor(props: {} | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <View style={{ width: '100%', minHeight: "100vh", backgroundColor: "white" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <View style={{width:"90%",maxWidth:"700px"}}>
            <Text h1 style={styles.text}>
              {"Find your image".toUpperCase()}
            </Text>

            <Text h4 style={styles.text}>
              The internet’s source of freely-usable images.
              Powered by creators everywhere.
            </Text>
          </View>
          <Button
            title="Explore more"
            raised
            onPress={() => (this.props as any).navigation.navigate('Search')}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  text: {
    paddingBottom: "2.3rem",
    textAlign: "center",
    margin: '0 auto',
    color: fontColorDark
  },
  imageBanner:{
    position: 'absolute',
    bottom:'1rem',
    right:"0rem",
    width:"50%",
    height:"50%",
    maxWidth:"450px",
  }
});