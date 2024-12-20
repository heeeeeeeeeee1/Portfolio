import AboutMe from '../components/AboutMe'
import SkillsList from '../components/SkillsList'
import ProjectsList from '../components/ProjectsList'
import './Home.css'

const Home = () => {
  return (
    <div>
      <h2>home</h2>
      <AboutMe />
      <SkillsList />
      <ProjectsList />
    </div>
  )
}
export default Home