import I18n from 'react-native-i18n'
import en from './en'
import vi from './vi'

// //
// I18n.defaultLocale = "pt-BR";
// I18n.locale = "pt-BR";
// I18n.currentLocale();
// // pt-BR
//
I18n.defaultLocale = "en";
I18n.locale  = "en";
I18n.currentLocale();

I18n.fallbacks = true;
I18n.translations = {
    en,
    vi
}

export default I18n;