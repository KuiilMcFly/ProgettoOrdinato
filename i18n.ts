import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      attiva: 'Attiva',
      scansione: 'Scansione',
      disattiva: 'Disattiva',
      fermaScansione: 'Ferma Scansione',
      ùbluetoothNonAttivo: 'Bluetooth non attivo',
      bluetoothNonAttivoMessage:'Per effettuare la scansione dei dispositivi, attiva il Bluetooth.',
      bluetoothAttivato: 'Bluetooth attivato!',
      bluetoothDisabilitato: 'Bluetooth disattivato!',
      disconnessioneRiuscita: 'Disconnessione riuscita!',
      warn: 'Attenzione, non sono riuscito a disconnetterti'
    },
  },
  en: {
    translation: {
      attiva: 'Activate',
      scansione: 'Scan',
      disattiva: 'Deactivate',
      fermaScansione: 'Stop Scan',
      bluetoothNonAttivo: 'Bluetooth is not active',
      bluetoothNonAttivoMessage: 'To scan for devices, please enable Bluetooth.',
      bluetoothAttivato: 'Bluetooth activated!',
      bluetoothDisabilitato: 'Bluetooth disabled!',
      disconnessioneRiuscita: 'Logout successful!',
      warn: 'Attention, I was unable to disconnect you'
    },
  },
  fr: {
    translation: {
      attiva: 'Activer',
      scansione: 'Analyse',
      disattiva: 'Désactiver',
      fermaScansione: 'Arrêter la numérisation',
      bluetoothNonAttivo: 'Bluetooth non actif',
      bluetoothNonAttivoMessage:'Pour rechercher des appareils, veuillez activer Bluetooth.',
      bluetoothAttivato: 'Bluetooth activé !',
      bluetoothDisabilitato: 'Bluetooth désactivé !',
      disconnessioneRiuscita: 'Déconnexion réussie !',
      warn: 'Attention, je n ai pas pu vous déconnecter'
    },
  },
  de: {
    translation: {
      attiva: 'Aktiv',
      scansione: 'Scan',
      disattiva: 'Deaktivieren',
      fermaScansione: 'Stoppen Sie den Scanvorgang',
      bluetoothNonAttivo: 'Bluetooth ist nicht aktiv',
      bluetoothNonAttivoMessage:'Um nach Geräten zu suchen, aktivieren Sie bitte Bluetooth.',
      bluetoothAttivato: 'Bluetooth aktiviert!',
      bluetoothDisabilitato: 'Bluetooth deaktiviert!',
      disconnessioneRiuscita: 'Abmeldung erfolgreich!',
      warn: 'Achtung, ich konnte die Verbindung nicht trennen'
    },
  },
};

// Configurazione di i18n
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
