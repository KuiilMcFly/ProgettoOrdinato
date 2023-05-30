## Librerie CMR e AES-ECB
npm install crc
npm install crc-react-native
npm install react-native-aes-ecb

Per l'errore i18next
npm install intl-messageformat
Creare un file a parte chiamato intl-polyfill.js e mettergli questo all'interno:

import './intl-polyfill'; // Importa il file del polyfill prima di tutto

// Importa ed inizializza l'applicazione React Native
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

Aggiungere import './intl-polyfill'; // Importa il file del polyfill prima di tutto all'index.js

## ESEMPI

//CRC
const crc = require('crc');

const crc32Value = crc.crc32('hello').toString(16);
console.log('CRC32:', crc32Value);

//CRIPTOGRAFIA AES-ECB
var aesEcb = require('react-native-aes-ecb');

var key = '0000000000000001';
var plaintext = 'Hello ';

// Verifica se la lunghezza del plaintext è multipla di 16 byte
if (plaintext.length % 16 !== 0) {
console.log('Errore: la lunghezza del plaintext non è valida');
return;
}

var encrypted = aesEcb.encrypt(key, plaintext);
var decrypted = aesEcb.decrypt(key, encrypted);

console.log('Plaintext:', plaintext);
console.log('Encrypted:', encrypted);
console.log('Decrypted:', decrypted);

## Installazione delle librerie i18n

Per utilizzare le librerie i18n, dobbiamo installare due pacchetti:
**IMPORTANTE**
npm install i18next react-i18next

## Creare un file i18n.ts e aggiungere le lingue che vogliamo avere nell'app

## Altre librerie da installare 
npm install @react-native-async-storage/async-storage
npm install react-native-linear-gradient
npm install react-native-loading-spinner-overlay
npm install react-native-wifi-reborn
npm install react-native-screens
npm install react-native-permissions