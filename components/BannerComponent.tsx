import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
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
      <View style={{ position: "relative", width: "100%", height: "100vh" }}>
        <View style={{ width: '100%', height: "100%", backgroundColor: "white", position: "relative", zIndex: 2 }}>
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <View style={{ width: "90%", maxWidth: "700px" }}>
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
  image: {
    position: "absolute",
    width:"100px",
    height:"100px",
    resizeMode: "contain",
    zIndex:1
  }
});