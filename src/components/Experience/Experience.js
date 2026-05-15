import { useContext } from 'react'
import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import { LanguageContext } from '../../contexts/language'
import i18n from '../../i18n'
import './Experience.css'

const Experience = () => {
  const [{ language }] = useContext(LanguageContext)
  const ui = i18n[language].experience
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>{ui.title}</h2>

      <div className='experience__list'>
        {experience.map((job) => (
          <div key={uniqid()} className='experience__item'>
            <div className='experience__header'>
              <h3 className='experience__company'>{job.name}</h3>
              <span className='experience__dates'>
                {job.startDate} - {job.endDate}
              </span>
            </div>
            <p className='experience__position'>{job.position[language]}</p>
            <ul className='experience__tasks'>
              {job.tasks[language].map((task) => (
                <li key={uniqid()}>{task}</li>
              ))}
            </ul>
            {job.stack && (
              <div className='experience__stack'>
                <span className='experience__stack-label'>{ui.stack}:</span>
                {job.stack.map((item) => (
                  <span key={uniqid()} className='experience__stack-item'>
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
