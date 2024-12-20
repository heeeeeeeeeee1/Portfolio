import { useEffect } from "react"
import Home from './pages/Home'
import './App.css'

function App() {
  // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 실행될 코드를 정의
  useEffect(() =>{
    const handleHash = () => {
      // window.location.hash: 현재 URL의 해시 부분을 가져옴
      // 예: www.example.com#skills -> '#skills'를 가져옴
      const hash = window.location.hash

      // 해시가 존재하면 실행
      if (hash) {
        // hash.slice(1): '#skills'에서 '#'을 제거하고 'skills'만 추출
        // document.getElementById(): 해당 id를 가진 HTML 요소를 찾음
        const element = document.getElementById(hash.slice(1))
        // 요소가 존재하면 스크롤. ?는 옵셔널 체이닝(element가 null이면 실행하지 않음)
        // behavior: 'smooth'로 부드러운 스크롤 효과를 줌
        element?.scrollIntoView({ behavior: 'smooth'})
      }
    }
    // 페이지 첫 로드 시 실행
    // 예: www.example.com#skills로 직접 접속했을 때 해당 위치로 스크롤
    handleHash()

    // 해시가 변경될 때마다 handleHash 함수가 실행되도록 이벤트 리스너 등록
    window.addEventListener('hashchange', handleHash)

    // 컴포넌트가 언마운트(제거)될 때 실행되는 클린업 함수
    // 메모리 누수 방지를 위해 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('hashchange', handleHash)
    }
    // 배열 안에 아무런 값도 없기 때문에 의존성 값이 변경될 일이 없음
    // 따라서 컴포넌트가 처음 마운트될 때(초기 렌더링 시)만 useEffect 내부의 코드가 실행
    // 이후 컴포넌트가 다시 렌더링되더라도 useEffect는 실행되지 않음
  }, [])
  return <Home />
}

export default App
