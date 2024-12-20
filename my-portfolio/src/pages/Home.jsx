import AboutMe from '../components/AboutMe'
import SkillsList from '../components/SkillsList'
import ProjectsList from '../components/ProjectsList'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <AboutMe />
      <SkillsList />
      <ProjectsList />
    </div>
  )
}
export default Home