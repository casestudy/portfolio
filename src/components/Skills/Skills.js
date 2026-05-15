import { useContext } from 'react'
import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import { LanguageContext } from '../../contexts/language'
import i18n from '../../i18n'
import './Skills.css'

const Skills = () => {
  const [{ language }] = useContext(LanguageContext)
  const ui = i18n[language].skills
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>{ui.title}</h2>
      <ul className='skills__list'>
        {skills.map((skill) => (
          <li key={uniqid()} className='skills__list-item btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
