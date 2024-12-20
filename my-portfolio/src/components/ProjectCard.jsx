import './ProjectCard.css'

// 부모컴포넌트로부터 받은 정보 보여주기
const ProjectCard = ({ href, imgSrc, title, description, keyword }) => {
  return (
    <div className='project-card'>
      <a href={href} className="project-link">
        <div className='project-image'>
          <img src={imgSrc} alt="프로젝트 썸네일" className='thumbnail'/>
        </div>
        <div className='text'>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{keyword}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
