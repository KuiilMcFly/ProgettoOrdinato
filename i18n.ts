import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  it: {
    translation: {
      attiva: 'Attiva',
      scansione: 'Scansione',
      disattiva: 'Disattiva',
      fermaScansione: 'Ferma Scansione',
    },
  },
  en: {
    translation: {
      attiva: 'Activate',
      scansione: 'Scan',
      disattiva: 'Deactivate',
      fermaScansione: 'Stop Scan',
    },
  },
  fr: {
    translation: {
      attiva: 'Activer',
      scansione: 'Analyse',
      disattiva: 'Désactiver',
      fermaScansione: 'Arrêter la numérisation',
    },
  },
  de: {
    translation: {
      attiva: 'Aktiv',
      scansione: 'Scan',
      disattiva: 'Deaktivieren',
      fermaScansione: 'Stoppen Sie den Scanvorgang',
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
