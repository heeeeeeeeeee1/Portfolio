import githubImg from '../assets/Github-Dark.svg'
import gmailImg from '../assets/Gmail.svg'

const AboutMe = () => {
  return (
    <div>
      {/* 포트폴리오 제목 */}
      <h2>안녕하세요🙂 프론트엔드 개발자를 꿈꾸는 박희원입니다.</h2>
      <p>전공: 체육교육과</p>
      <p>비전공 파이썬</p>
      <p>관심 도메인: 헬스케어, 에듀테크</p>
      <a href="">heeeeeeeeeee1
        <img src={githubImg} alt="깃허브" />
      </a> 
      <a href="mailto:dino11814@gmail.com">dino11814@gmail.com"
        <img src={gmailImg} alt="메일" />
      </a>

    </div>
  )
}

export default AboutMe
