import 'intl';
import 'intl/locale-data/jsonp/en'; // Importa le localizzazioni necessarie

if (typeof Intl.PluralRules === 'undefined') {
  require('intl-pluralrules'); // Applica il polyfill Intl.PluralRules
}
