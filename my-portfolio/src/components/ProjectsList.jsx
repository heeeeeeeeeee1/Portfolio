// 프로젝트 4개를 한 컴포넌트로 여러번 가져오려면?


// 프로젝트 썸네일?
// 제목
// 태그 느낌으로 프로젝트 관련 정보 간략하게
// 팀, 영화추천, vue, django 이런식으로
import ProjectCard from "./ProjectCard"
import projectImage from '../assets/basic-profile.png'

const ProjectsList = () => {
  const projects =[
    {
      href: 'https://github.com/heeeeeeeeeee1/KIKI_MOVIE',
      imgSrc: projectImage,
      title: '키키무비',
      description: '모두를 위한, 특별하고 재미있는 영화추천 서비스',
      keyword: '팀, 영화추천, Vue, Django',
    },
    {
      href: 'https://heeeeeeeeeee1.github.io/How-are-you-feeling-today/',
      imgSrc: '../assets/baisc-profile.png',
      title: '프로젝트2',
      description: '인사이드아웃을 테마로 한 투두리스트',
      keyword: '솔로, 투두리스트, javascript',
    },
  ]

  return (
    <div>
      <h3>Projects</h3>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.href}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
            keyword={project.keyword}
          />
        ))}
      </div>
    </div>
  )
}
export default ProjectsList