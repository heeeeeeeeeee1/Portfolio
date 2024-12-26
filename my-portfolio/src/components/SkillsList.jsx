import { useState } from 'react'
import cssImg from '../assets/CSS.svg'
import pythonImg from '../assets/Python-Light.svg'
import djangoImg from '../assets/Django.svg'
import figmaImg from '../assets/Figma.svg'
import htmlImg from '../assets/HTML.svg'
import vueImg from '../assets/VueJS-Light.svg'
import jsImg from '../assets/JavaScript.svg'
import reactImg from '../assets/React.svg'
import './SkillsList.css'

const skillsData = [
  { name: 'Javascript', img: jsImg, level: '프로젝트 경험이 여러번 있어요.' },
  { name: 'HTML', img: htmlImg, level: '프로젝트 경험이 여러번 있어요.' },
  { name: 'CSS', img: cssImg, level: '프로젝트 경험이 여러번 있어요.' },
  { name: 'Python', img: pythonImg, level: '그래프 탐색 알고리즘을 풀 수 있어요.' },
  { name: 'Vue', img: vueImg, level: '프로젝트 경험이 있어요.' },
  { name: 'Django', img: djangoImg, level: '프로젝트 경험이 있어요.' },
  { name: 'React', img: reactImg, level: '자기소개 페이지를 만들어 봤어요.\n배우고 있는 단계입니다.'},
  { name: 'Figma', img: figmaImg, level: '간단한 화면설계서를 만들 수 있어요.' }
];

const SkillsList = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <div className="skills-container">
      <h2>Skills & Tools</h2>
      <div className="skills-list">
        {skillsData.map((skill, index)=>(
          <div
            key={index}
            className="skill-item"
            onMouseEnter={() => setHoveredSkill(skill)}  
            onMouseLeave={() => setHoveredSkill(null)}  
          >
            <img src={skill.img} alt={skill.name} />
            {hoveredSkill === skill && (
              <div className='skill-popup'>
                <h3>{skill.name}</h3>
                <p>{skill.level}</p>
              </div>
            )}
            </div>
        ))}
        {/* <img src={pythonImg} alt="python" />
        <img src={jsImg} alt="javascript" />
        <img src={htmlImg} alt="html" />
        <img src={cssImg} alt="css" />
        <img src={vueImg}alt="vue" />
        <img src={djangoImg} alt="django" />
        <img src={reactImg} alt="react" />
        <img src={figmaImg} alt="figma" /> */}
      </div>
    </div>
  )
}
export default SkillsList