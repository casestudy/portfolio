import { useContext } from 'react'
import { contact } from '../../portfolio'
import { LanguageContext } from '../../contexts/language'
import i18n from '../../i18n'
import './Contact.css'

const Contact = () => {
  const [{ language }] = useContext(LanguageContext)
  const ui = i18n[language].contact
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>{ui.title}</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          {ui.emailButton}
        </span>
      </a>
    </section>
  )
}

export default Contact
