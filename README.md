# IntelliView App

Questa è una semplice app realizzata in React Native.

## Configurazione di React Native sul tuo PC

### Prerequisiti
1. **Node.js**: Installa [Node.js](https://nodejs.org/) seguendo le istruzioni per il tuo sistema operativo.
2. **Java Development Kit (JDK)**: Scarica e installa il [JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).

### Installazione di React Native CLI
Per configurare React Native, segui questi passaggi:

1. Installa React Native CLI:
    ```bash
    npm install -g react-native-cli
    ```

2. Crea un nuovo progetto React Native:
    ```bash
    npx react-native init MyReactNativeApp
    ```

### Installazione di Android Studio (solo per sviluppatori Android)
1. Scarica e installa [Android Studio](https://developer.android.com/studio).
2. Durante l'installazione, assicurati di includere Android SDK, Android SDK Platform, e Android Virtual Device.

### Configurazione dell'ambiente
1. Imposta variabili d'ambiente:
    ```bash
    export ANDROID_HOME=$HOME/Library/Android/sdk
    export PATH=$PATH:$ANDROID_HOME/emulator
    export PATH=$PATH:$ANDROID_HOME/tools
    export PATH=$PATH:$ANDROID_HOME/tools/bin
    export PATH=$PATH:$ANDROID_HOME/platform-tools
    ```

## Configurazione di Expo CLI

### Installazione di Expo CLI
Expo è una piattaforma e un set di strumenti per lo sviluppo e la creazione di app React Native con facilità.

1. Installa Expo CLI:
    ```bash
    npm install -g expo-cli
    ```

2. Crea un nuovo progetto Expo:
    ```bash
    expo init MyExpoApp
    ```

3. Avvia il progetto:
    ```bash
    cd MyExpoApp
    expo start
    ```

## Configurazione di Node.js

Node.js è essenziale per eseguire React Native e Expo CLI.

1. Scarica e installa [Node.js](https://nodejs.org/) dal sito ufficiale.
2. Verifica l'installazione:
    ```bash
    node -v
    npm -v
    ```

Assicurati che le versioni di Node.js e npm siano aggiornate.

### Extra: Installa Watchman (solo per macOS)
Watchman è uno strumento opzionale che può aiutare con le prestazioni di sviluppo:
```bash
brew install watchman
