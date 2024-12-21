import AboutMe from '../components/AboutMe'
import SkillsList from '../components/SkillsList'
import ProjectsList from '../components/ProjectsList'
import Header from '../components/Header'
import './Home.css'

const Home = () => {
  return (
    <div className='home' id='home'>
      <Header />    
      <AboutMe />
      <section id='skills'>
        <SkillsList />
      </section>
      <section id='projects'>
        <ProjectsList />
      </section>
    </div>
  )
}
export default Home