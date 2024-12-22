import sourceIcon from '../assets/source.png'
import deployIcon from '../assets/deploy.png'
import './ProjectCard.css'

// 부모컴포넌트로부터 받은 정보 보여주기
const ProjectCard = ({ source, deploy, imgSrc, title, description, roles, keywords }) => {
  return (
    <div className='project-card'>
      <div className='project-image'>
        <img src={imgSrc} alt="프로젝트 썸네일" className='thumbnail'/>
      </div>

      <div className='text'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='roles'>
          {roles.map((role, index) => (
            <span key={index} className='role'>{role}</span>
          ))}
        </div>
        <div className='keywords'>
          {keywords.map((keyword, index) => (
            <span key={index} className='keyword'>{keyword}</span>
          ))}
        </div>
      </div>

      <div className='link'>
        {/* deploy가 ''인 경우 img 숨기기 */}
        {deploy && (
          <a href={deploy} className="project-deploy" target="_blank" rel="noopener noreferrer">
            <img className='deploy' src={deployIcon} alt="프로젝트 배포링크" />
          </a>
        )}
        <a href={source} className="project-source" target="_blank" rel="noopener noreferrer">
          <img className='source' src={sourceIcon} alt="프로젝트 소스코드" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
