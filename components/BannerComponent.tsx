import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { View } from 'react-native';

export default class extends React.PureComponent {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <ImageBackground source={require(
        '../assets/images/bg.jpg'
      )} style={{ width: '100%', minHeight: "100vh" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text h1 style={styles.h1}>
            {"Find your image".toUpperCase()}
          </Text>

          <Text h4 style={styles.h1}>
            The internet’s source of freely-usable images.
            Powered by creators everywhere.
            </Text>
          <Button
            title="Explore more"
            type="outline"
            raised
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    paddingBottom: "2.3rem",
    width: "90%",
    maxWidth: "600px",
    color: "white",
    textAlign: "center"
  }
});