import { useContext } from 'react'
import uniqid from 'uniqid'
import { education } from '../../portfolio'
import { LanguageContext } from '../../contexts/language'
import i18n from '../../i18n'
import './Education.css'

const Education = () => {
  const [{ language }] = useContext(LanguageContext)
  const ui = i18n[language].education
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>{ui.title}</h2>

      <div className='education__list'>
        {education.map((entry) => (
          <div key={uniqid()} className='education__item'>
            <div className='education__header'>
              <h3 className='education__school'>{entry.school}</h3>
              <span className='education__dates'>
                {entry.startDate} - {entry.endDate}
              </span>
            </div>
            <p className='education__degree'>{entry.degree[language]}</p>
            {entry.credential && (
              <p className='education__credential'>{entry.credential[language]}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
