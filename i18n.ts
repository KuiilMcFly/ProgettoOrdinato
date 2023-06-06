import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      sampleText: 'Ciao sono un testo',
      scansione: 'Scansione',
      fermaScansione: 'Ferma Scansione',
      bluetoothNonAttivo: 'Bluetooth non attivo',
      bluetoothNonAttivoMessage:
        'Per effettuare la scansione dei dispositivi, attiva il Bluetooth.',
      bluetoothAttivato: 'Bluetooth attivato!',
      bluetoothDisabilitato: 'Bluetooth disattivato!',
      disconnessioneRiuscita: 'Disconnessione riuscita!',
      warn: 'Attenzione, non sono riuscito a disconnetterti',
      lingua: 'Lingua',
      linguaCambiata: 'Lingua cambiata!',
      impostazioni: 'IMPOSTAZIONI',
      bluetoothConnectionAlert: 'Questa sezione è accessibile solo dopo che sei connesso ad un device',
      help: 'AIUTO',
      setting: 'IMPOSTAZIONI',
      contact: 'CONTATTACI',
      about: 'CHI SIAMO',
      infoVersione: 'Informazioni sulla versione',
      versione1 : 'Versione:',
      versione2 : 'Versione:',
      versione3 : 'Versione:',
    },
  },
  en: {
    translation: {
      sampleText: "hi i'm a text",
      scansione: 'Scan',
      fermaScansione: 'Stop Scan',
      bluetoothNonAttivo: 'Bluetooth is not active',
      bluetoothNonAttivoMessage:
        'To scan for devices, please enable Bluetooth.',
      bluetoothAttivato: 'Bluetooth activated!',
      bluetoothDisabilitato: 'Bluetooth disabled!',
      disconnessioneRiuscita: 'Logout successful!',
      warn: 'Attention, I was unable to disconnect you',
      lingua: 'Language',
      linguaCambiata: 'Language changed!',
      impostazioni: 'SETTING',
      bluetoothConnectionAlert: 'This section is accessible only after you are connected to a device',
      help: 'HELP',
      setting: 'SETTING',
      contact: 'CONTACT US',
      about: 'ABOUT US',
      infoVersione: 'Version information',
      versione1 : 'Version:',
      versione2 : 'Version:',
      versione3 : 'Version:',
    },
  },
  fr: {
    translation: {
      sampleText: 'salut je suis un texto',
      scansione: 'Analyse',
      fermaScansione: 'Arrêter la numérisation',
      bluetoothNonAttivo: 'Bluetooth non actif',
      bluetoothNonAttivoMessage:
        'Pour rechercher des appareils, veuillez activer Bluetooth.',
      bluetoothAttivato: 'Bluetooth activé !',
      bluetoothDisabilitato: 'Bluetooth désactivé !',
      disconnessioneRiuscita: 'Déconnexion réussie !',
      warn: 'Attention, je n ai pas pu vous déconnecter',
      lingua: 'Langue',
      linguaCambiata: 'La langue a changé!',
      impostazioni: 'PARAMÈTRE',
      bluetoothConnectionAlert: "Cette section n'est accessible qu'après vous être connecté à un appareil",
      help: 'AIDER',
      setting: 'PARAMÈTRE',
      contact: 'CONTACTEZ-NOUS',
      about: 'À PROPOS DE NOUS',
      infoVersione: 'Information sur la version',
      versione1 : 'Version:',
      versione2 : 'Version:',
      versione3 : 'Version:',
    },
  },
  de: {
    translation: {
      sampleText: 'Hallo, ich bin ein Text',
      scansione: 'Scan',
      fermaScansione: 'Stoppen Sie den Scanvorgang',
      bluetoothNonAttivo: 'Bluetooth ist nicht aktiv',
      bluetoothNonAttivoMessage:
        'Um nach Geräten zu suchen, aktivieren Sie bitte Bluetooth.',
      bluetoothAttivato: 'Bluetooth aktiviert!',
      bluetoothDisabilitato: 'Bluetooth deaktiviert!',
      disconnessioneRiuscita: 'Abmeldung erfolgreich!',
      warn: 'Achtung, ich konnte die Verbindung nicht trennen',
      lingua: 'Zunge',
      linguaCambiata: 'Sprache geändert!',
      impostazioni: 'EINSTELLUNG',
      bluetoothConnectionAlert: 'Auf diesen Abschnitt kann erst zugegriffen werden, nachdem Sie mit einem Gerät verbunden sind',
      help: 'HILFE',
      setting: 'EINSTELLUNG',
      contact: 'KONTAKTIERE UNS',
      about: 'ÜBER UNS',
      infoVersione: 'Versionsinformation',
      versione1 : 'Ausführung:',
      versione2 : 'Ausführung:',
      versione3 : 'Ausführung:',
    },
  },
};

// Configurazione di i18n
i18n.use(initReactI18next).init({
  resources,
  lng: 'it',
  fallbackLng: 'it',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
