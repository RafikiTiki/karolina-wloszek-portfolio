import i18n from "i18next"
import Backend from "i18next-xhr-backend"
import { reactI18nextModule } from "react-i18next"

i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({

    fallbackLng: "en",
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  }, () => {
    const storedLanguage = localStorage.getItem('i18nextLng') || 'en'
    i18n.changeLanguage(storedLanguage, () => {
      localStorage.setItem('i18nextLng', storedLanguage)
    })
  })

export default i18n