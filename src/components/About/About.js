import { useContext } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import { LanguageContext } from '../../contexts/language'
import i18n from '../../i18n'
import './About.css'

const About = () => {
  const [{ language }] = useContext(LanguageContext)
  const ui = i18n[language].about
  const t = (field) => (field && typeof field === 'object' ? field[language] : field)
  const { name, role, description, resume, social, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

    <div className='about__intro'>
      {name && (
        <h1>
          {ui.greeting} <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{ui.rolePrefix}{t(role)}.</h2>}
      <p className='about__desc'>{description && t(description)}</p>
      </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={t(resume)}>
            <span type='button' className='btn btn--outline'>
              {ui.resume}
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
