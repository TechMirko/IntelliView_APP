import { Text, StyleSheet, View, Image, SafeAreaView, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../config/Colors'
import FontDimensions from '../config/FontDimensions'

// componenti esterni dell'app
import Body from './Body'

export default function Main() {
  return (
    <SafeAreaView style={styles.andoirdSafeAreaView}> 
      <View style={styles.container}>
        <Image 
          source={require('../assets/images/Logo_IMG-removebg.png')}
          style={styles.stileLogo}
        />
        <Body />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: Colors.primary, // color rosso Adecco
    width: 370,
    height: 90
  },
  container: {
    flexDirection: 'row', // decisione di quale asse usare come principale
    justifyContent: 'center', // allineamento asse principale
    alignItems: 'center', // allineamento asse secondario
    alignContent: 'center'
  },
  stileLogo: {
    width: 237,
    height: 265
  },
  andoirdSafeAreaView: {
    flex: 1,
    backgroundColor: Colors.backgroud,
    paddingTop: Platform.OS == "android" ? 50: 0
  },
  testo: {
    color: Colors.black,
    fontSize: FontDimensions.message,
    fontWeight: 'black',
  },
})