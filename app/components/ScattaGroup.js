/*
                         ----- TODO -----
  Collaudo finale:
  - controllare connessioni: BLE e MQTT
  - funzionamento sul campo con ESP32-cam che si connette
  e che manda dati riconosciuti dalla AI

*/

import React, {useState, useEffect} from "react"
import Colors from "../config/Colors"
import FontDimensions from "../config/FontDimensions"
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { sendMessage } from "./Body"

export default function ScattaGroup({ connectionStatus, mqttMessage }) {
  const [msg, setMsg] = useState('Oggetto: ')

  useEffect(() => {
    if (mqttMessage !== '') {
      setMsg(`Oggetto: ${mqttMessage}`)
    }
  }, [mqttMessage]);

  const handlePress = () => {
    setMsg('Oggetto: ⏳')
    sendMessage('start')
  };

  return (
    <>
      <View style={styles.scattaStatusView}>
        <Text style={styles.testo}>{msg}</Text>
      </View>
      <View style={styles.scattaContainer}>
        <TouchableOpacity 
          activeOpacity={connectionStatus ? 0 : 1}
          style={
            connectionStatus ? 
              styles.buttonStyleConnected : styles.buttonStyleNotConnected
          }
          onPress={connectionStatus ? handlePress : () => {}}
        >
          <Text style={styles.buttonText}>SCATTA</Text>
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
  scattaStatusView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 830
  },
  scattaContainer: {   
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 980,
  },
  buttonStyleConnected: {
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
  buttonStyleNotConnected: {
    height: 90,
    width: 370,
    backgroundColor: Colors.notConnectedButton,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  }
})