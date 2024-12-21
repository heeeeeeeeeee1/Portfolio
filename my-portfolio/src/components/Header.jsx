import './Header.css'

const Header = () => {
  // 해당 id를 가진 DOM 요소를 찾고, 찾은 요소를 스크롤롤
  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId)
    // 옵셔널 체이닝 : element가 null 또는 undefined인지 확인. null 또는 undefined라면, 이후의 메서드 호출 X
    // element?.scrollIntoView({ behavior: 'smooth'})

    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    // 시맨틱 태그
    <nav className='header'>
        <a href="#home" onClick={(e)=>{
          e.preventDefault()
          scrollToSection('home')
        }}>Home</a>
        <a href="#skills" onClick={(e)=>{
          e.preventDefault()
          scrollToSection('skills')
        }}>Skills</a>
        <a href="#projects" onClick={(e)=>{
          e.preventDefault()
          scrollToSection('projects')
        }}>Projects</a>
    </nav>
  )
}

export default Header