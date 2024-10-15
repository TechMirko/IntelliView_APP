/*
  Topic list:
    - tecnicamente/start --> per iniziare il processo, il dato va dall'app alla cam
    - tecnicamente/riconoscimento --> per ricevere ciò che è stato elaboratto dalla AI
*/ 

import React, {useState, useEffect} from "react"
import ScattaGroup from "./ScattaGroup"
import ConnettiGroup from "./ConnettiGroup"
import Paho from 'pacd ho-mqtt'
import { Audio } from "expo-av"

// Client MQTT
const client = new Paho.Client(
  'broker.emqx.io',
  Number(8083),
  `mqtt-async-test-${parseInt(Math.random() * 100)}`
)

export default function Body() {
  // Path dei file audio
  const audioFiles = { 
    connesso: require('../assets/audio/connesso.mp3'),
    disconnesso: require('../assets/audio/disconnesso.mp3'),
    euro: require('../assets/audio/5_euro.mp3'),
    semaforoVerde: require('../assets/audio/semaforo_verde.mp3'),
    semaforoRosso: require('../assets/audio/semaforo_rosso.mp3'),
    nessuno: require('../assets/audio/nessun_oggetto.mp3')
  }
 
  // Funzione per riprodurre l'audio corretto
  const playSound = async (audio) => {
    // Nuovo oggetto Audio.Sound
    const soundObject = new Audio.Sound();
    // Carica e riproduci l'audio
    try {
      await soundObject.loadAsync(audio)
      await soundObject.playAsync()
    } catch (error) {
      console.log(error)
    }
  }
  // MQTT messages
  const oggettoRiconosciuto = 'tecnicamente/riconoscimento'
  const [mqttMessage, setMqttMessage] = useState('')
  
  // MQTT Client
  const [isConnected, setConnectionStatus] = useState(false)
  const [isClientConnected, setClientConnected] = useState(false)
  const [data, setData] = useState(false)
  const handleDataChange = () => {
    if (isClientConnected) {
      client.disconnect()
      console.log('Disconnessione: ✅ Connessione: ❌')
      playSound(audioFiles.disconnesso)
      setClientConnected(false)
      setConnectionStatus(false)
    } else {
      setData(!data)
    }
  }
  useEffect(() => {
    if(data && !isClientConnected) {
      client.connect({
        onSuccess: () => {
          console.log('Connessione: ✅')
          setConnectionStatus(true)
          setClientConnected(true)
          client.subscribe(oggettoRiconosciuto)
          client.onMessageArrived = (msg) => {
            setMqttMessage(msg.payloadString)
            console.log(`Messaggio: ${msg.payloadString}`)
            // Gestione sintesi vocale output AI in arrivo da MQTT
            if(msg.payloadString === '5 euro'){
              playSound(audioFiles.euro)
            } else if(msg.payloadString === 'semaforo rosso'){
              playSound(audioFiles.semaforoRosso) 
            } else if(msg.payloadString === 'semaforo verde'){
              playSound(audioFiles.semaforoVerde)
            } else if(msg.payloadString === 'nessun oggetto'){
              playSound(audioFiles.nessuno)
            }
          }
          // Connessione effettuata
          playSound(audioFiles.connesso)
        },
        onFailure: () => {
          console.log('Connessione: ❌')
          setConnectionStatus(false)
          setClientConnected(false)
        }
      })
    } else if (!data && isClientConnected) {
      client.disconnect()
      console.log('Disconnessione: ✅')
      playSound(audioFiles.disconnesso)
      setClientConnected(false)
      setConnectionStatus(false)
    }
  }, [data])


  return (
    <>
      <ConnettiGroup 
        connectionStatus={isConnected}
        onData={handleDataChange}
      />
      <ScattaGroup 
        connectionStatus={isConnected}
        mqttMessage={mqttMessage}
      />
    </>
  )
}

// funzione per madare i messaggi
export function sendMessage(msg) {
  const inizio = 'tecnicamente/start'
  const m = new Paho.Message(msg)
  m.destinationName = inizio
  client.send(m)
}