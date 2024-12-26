import { useEffect } from 'react'
import AboutMe from '../components/AboutMe'
import SkillsList from '../components/SkillsList'
import ProjectsList from '../components/ProjectsList'
import Header from '../components/Header'
import './Home.css'

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 화면에 나타났다면
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      {threshold: 0.1}
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  },[])

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