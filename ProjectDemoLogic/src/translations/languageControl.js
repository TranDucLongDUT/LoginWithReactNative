import I18n from 'react-native-i18n'
import en from './en'
import vi from './vi'
 
// I18n.defaultLocale = "en";
// I18n.currentLocale();
I18n.setLocale = (language) => {
    I18n.locale  = language;
}

I18n.getCurrentLanguage = () => {
    I18n.currentLocale();
}
I18n.fallbacks = true;
I18n.translations = {
    en,
    vi
}


export default I18n;