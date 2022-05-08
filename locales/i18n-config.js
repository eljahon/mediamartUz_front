import {uz} from './uz'
import {ru} from './ru'
import {en} from './en'
export const I18n = {
  locales: ['en', 'ru', 'uz'],
    defaultLocale: 'en',
  vueI18n: {
  fallbackLocale: 'en',
    messages: {
    en,ru,uz
  }
}
}
