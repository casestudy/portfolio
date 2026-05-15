import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { ThemeContext } from '../../contexts/theme'
import { LanguageContext } from '../../contexts/language'
import { projects, experience, education, skills, contact } from '../../portfolio'
import i18n from '../../i18n'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [{ language, toggleLanguage }] = useContext(LanguageContext)
  const [showNavList, setShowNavList] = useState(false)
  const ui = i18n[language].nav

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {ui.projects}
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {ui.skills}
            </a>
          </li>
        ) : null}

        {experience.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {ui.experience}
            </a>
          </li>
        ) : null}

        {education.length ? (
          <li className='nav__list-item'>
            <a
              href='#education'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {ui.education}
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {ui.contact}
            </a>
          </li>
        ) : null}

        <li className='nav__list-item'>
          <button
            type='button'
            onClick={toggleLanguage}
            className='btn btn--icon nav__lang'
            aria-label='toggle language'
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </li>
      </ul>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar
