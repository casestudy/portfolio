import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const LanguageContext = createContext()

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en'
  )

  const toggleLanguage = () => {
    const lang = language === 'en' ? 'fr' : 'en'
    localStorage.setItem('language', lang)
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={[{ language, toggleLanguage }]}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { LanguageContext, LanguageProvider }
