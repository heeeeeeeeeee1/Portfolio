import githubImg from '../assets/Github-Dark.svg'
import gmailImg from '../assets/Gmail.svg'
import './AboutMe.css'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import MyAvatar from '../components/MyAavatar'
// import ModelBreaking from '../components/BreakingAvatar'
import Greeting from '../components/Greeting'

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className='about-me-content'>
        <div className='text-content'>
          <h2>안녕하세요🙂</h2>
          <h2>프론트엔드 개발자를 꿈꾸는 박희원입니다.</h2>
          <p>체육교육과</p>
          <p>비전공 파이썬</p>
          <p>헬스케어</p>
          <p>에듀테크</p>

          <div className="contact-links">
            <a href="https://github.com/heeeeeeeeeee1">
              <img src={githubImg} alt="깃허브" />heeeeeeeeeee1
            </a> 
            <a href="mailto:dino11814@gmail.com">
              <img src={gmailImg} alt="메일" />dino11814@gmail.com
            </a>
          </div>
        </div>

        <div className='canvas-container'>
          <Canvas
            camera={{ postion: [0, 1, 5], fov: 45}}
            style={{
              backgroundColor: 'transparent', // 투명배경
              width: '100%',
              height: '100vh',
            }}
            >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Greeting position={[0.025, -0.9, 0]} />
            <OrbitControls enableZoom={false}/>
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
