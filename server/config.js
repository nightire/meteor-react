import IntlPolyfill from 'intl';
import areIntlLocalesSupported from 'intl-locales-supported';

const localesSupports = [
  'en-US',
  'en-UK',
  'zh-Hans',
  'zh-Hant',
];

export {
  areIntlLocalesSupported,
  localesSupports,
};

if (global.Intl) {
  if (!areIntlLocalesSupported(localesSupports)) {
    Intl.NumberFormat   = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  }
} else {
  global.Intl = IntlPolyfill;
}

