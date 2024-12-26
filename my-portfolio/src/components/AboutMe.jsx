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
    <div className="about-me-container fade-in">
      <div className='about-me-content'>
        <div className='canvas-container'>
          <Canvas
            camera={{ position: [0, 1, 4], fov: 45}}
            style={{
              backgroundColor: 'transparent', // 투명배경
              width: '200px',
              height: '500px',
            }}
            >
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Greeting position={[0, -0.75, 0.5]} />
            <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
        <div className='text-content'>
          <h2>안녕하세요🙂</h2>
          <h2>프론트엔드 개발자를 꿈꾸는 박희원입니다.</h2>
          <div className='keywords'>
            <p className='major'>체육교육과</p>
            <p className='learn'>비전공 파이썬</p>
            <p className='interest'>헬스케어</p>
            <p className='interest'>에듀테크</p>
          </div>

          <div className="contact-links">
            <a href="https://github.com/heeeeeeeeeee1" target="_blank" rel="noopener noreferrer">
              <img className='github' src={githubImg} alt="깃허브" />
            </a> 
            <a href="mailto:dino11814@gmail.com">
              <img className='gmail' src={gmailImg} alt="메일" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutMe
