import './ProjectCard.css'

// 부모컴포넌트로부터 받은 정보 보여주기
const ProjectCard = ({ href, imgSrc, title, description, keyword }) => {
  return (
    <div className='project-card'>
      <a href={href} className="project-link">
        <img src={imgSrc} alt="프로젝트 썸네일" className='thumbnail'/>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>{keyword}</p>
      </a>
    </div>
  );
};

export default ProjectCard;
