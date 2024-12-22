import ProjectCard from './ProjectCard'
import tickleyImg from '../assets/Tickley_thumbnail.png'
import kikimovieImg from '../assets/Kikimovie_thumbnail.png'
import howareyouImg from '../assets/How_are_you_thumbnail.png' 
import squatImg from '../assets/squat_thumbnail.png'
import './ProjectsList.css'

const ProjectsList = () => {
  const projects =[
    {
      source: 'https://github.com/heeeeeeeeeee1/KIKI_MOVIE',
      deploy: '',
      imgSrc: kikimovieImg,
      title: '키키무비',
      description: '모두를 위한, 특별하고 재미있는 영화추천 서비스',
      roles: ['FE', 'BE'],    
      keywords: ['팀', '영화추천', 'Vue', 'Django', 'Teachable Machine'],
    },
    {
      source: 'https://github.com/heeeeeeeeeee1/How-are-you-feeling-today',
      deploy: 'https://heeeeeeeeeee1.github.io/How-are-you-feeling-today/',
      imgSrc: howareyouImg,
      title: 'How are you feeling today?',
      description: '영화 인사이드아웃 테마 투두리스트',
      roles: ['FE'],
      keywords: ['솔로', '투두리스트', 'Javascript'],
    },
    {
      source: 'https://github.com/Tickley-Team/Tickley?tab=readme-ov-file',
      deploy: 'https://tickley-team.github.io/Tickley/',
      imgSrc: tickleyImg,
      title: '티클리(Tickley)',
      description: '당신의 소중한 자투리 시간을\n효율적으로 관리할 수 있도록 도와주는 서비스',
      roles: ['FE'],
      keywords: ['팀', '스프린트', '자투리 타이머', 'React'],
    },
    {
      source: 'https://ripe-impatiens-86b.notion.site/162603fef9268149af5ecae453aa1d85?pvs=4/',
      deploy: '',
      imgSrc: squatImg,
      title: '딥러닝 모델을 활용한 스쿼트 자세교정 서비스',
      description: 'CNN 모델을 활용한 스쿼트 평가등급 제공',
      roles: ['기획'],
      keywords: ['팀', 'Rasberry Pi', 'Python','Tensorflow'],
    },
  ]

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            source={project.source}
            deploy={project.deploy}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            roles={project.roles}
            keywords={project.keywords}
          />
        ))}
      </div>
    </div>
  )
}
export default ProjectsList