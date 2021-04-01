import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';

import ScanScreen from './screens/scanScreen';
const image = { uri: "https://raw.githubusercontent.com/IronMan-1000/barcode-scanner/main/800px_COLOURBOX40672262.jpg" };


export default class App extends React.Component {
  render(){
    return (
    <View>
    <ImageBackground source={image} style={styles.image}>
        <ScanScreen />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "center",
  }
});
