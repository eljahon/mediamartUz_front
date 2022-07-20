import uz from './uz.json'
import ru from './ru.json'
import en from './en.json'
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
