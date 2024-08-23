import React, {useEffect} from "react"
import Colors from "../config/Colors"
import FontDimensions from "../config/FontDimensions"
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default function ConnettiGroup({connectionStatus, onData}) {
  return (
    <>
      <View style={styles.connectionStatusView}>
        <Text style={styles.testo}>
          Stato connessione: {connectionStatus ? '✔️' : '✖️'}  
        </Text>
      </View>
      <View style={styles.scansionaContainer}>
        <TouchableOpacity 
          style={styles.buttonStyle}
          onPress={() => {
            console.log("Connetti premuto")
            onData()
          }}
        >
          <Text 
            style={styles.buttonText}
          >
            {connectionStatus ? 'DISCONNETTI' : 'CONNETTI'}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  testo: {
    color: Colors.black,
    fontSize: FontDimensions.message,
    fontWeight: 'black',
  },
  connectionStatusPNG: {
    width: 30,
    height: 30, 
    position: 'absolute',
    paddingRight: 70
  },
  connectionStatusView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 430
  },
  scansionaContainer: {   
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 580,
  },
  buttonStyle: {
    height: 90,
    width: 370,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  buttonText: {
    color: Colors.backgroud,
    fontSize: FontDimensions.buttons
  },
})
