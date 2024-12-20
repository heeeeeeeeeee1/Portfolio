import cssImg from '../assets/CSS.svg'
import pythonImg from '../assets/Python-Light.svg'
import djangoImg from '../assets/Django.svg'
import figmaImg from '../assets/Figma.svg'
import htmlImg from '../assets/HTML.svg'
import vueImg from '../assets/VueJS-Light.svg'
import jsImg from '../assets/javaScript.svg'
import reactImg from '../assets/react.svg'
import './SkillsList.css'

const SkillsList = () => {
  return (
    <div className="skills-container">
      <h2>Skills & Tools</h2>
      <div className="skills-list">
        <img src={pythonImg} alt="python" />
        <img src={jsImg} alt="javascript" />
        <img src={htmlImg} alt="html" />
        <img src={cssImg} alt="css" />
        <img src={vueImg}alt="vue" />
        <img src={djangoImg} alt="django" />
        <img src={reactImg} alt="react" />
        <img src={figmaImg} alt="figma" />
      </div>
    </div>
  )
}
export default SkillsList