import { useContext } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import { LanguageContext } from '../../contexts/language'
import i18n from '../../i18n'
import './Projects.css'

const Projects = () => {
  const [{ language }] = useContext(LanguageContext)
  const ui = i18n[language].projects
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>{ui.title}</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} language={language} />
        ))}
      </div>
    </section>
  )
}

export default Projects
