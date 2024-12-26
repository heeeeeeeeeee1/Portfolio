## 포트폴리오 작업 중 트러블 슈팅

### 1. 한 페이지 안에서 컴포넌트로의 이동 구현
  - Link를 사용해서 페이지이동을 하려고 하였으나 스크롤 사용이 불가하게됨
  - => DOM API의 scrollIntoView 메서드를 이용해 Header의 버튼을 클릭했을 때 페이지가 이동하지는 않지만(메인 페이지에 그대로 있으면서) 해당 콘텐츠로 이동할 수 있게 구현

### 2. 썸네일 문제
  - 이미지를 절대경로로 설정해도 해결이 안되다가 vercel --prod로 배포하고 카카오톡 공유했더니 썸네일이 보이길래 해결 된 줄 알았다.
  - 이후에 메인 화면을 수정하면서 썸네일도 수정했는데 이 수정한 썸네일이 다시 반영되지 않았다.
  - 몇 번을 재배포 해보았지만 예전 썸네일이 유지돼서 vercel 레포지토리를 삭제하고 다시 배포했다.
  - 하지만 여전히 예전 썸네일이 나와서 뭐지 싶었는데 **카카오톡 캐시** 문제였다.
  - [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing)에서 캐시 초기화했더니 해결됐다ㅜㅜㅜ 시간 많이썼는데 캐시 문제였다니... 그래도 url 디버깅 해주는 도구 하나 알게됐다😂(긍정)

</br>

---

</br>

## 🧍3D 아바타 포트폴리오에 적용하기

### 1. 3D 아바타 만들기
- https://readyplayer.me

  - 아바타 생성 후 glb 파일 저장

</br>

### 2. 리액트에서 아바타 사용하기
- React 프로젝트 생성 후 필요한 라이브러리 설치하기기
- three.js 설치(Vite 사용)
  ```bash
  npm install three @react-three/fiber @react-three/drei
  ```
- -g는 전역 설치(선택택)
  ```
  npm install -g @react-three/gltfjsx
  ```

- jsx파일로 변환
  ```
  gltfjsx 파일명.glb
  ```

- glb 파일 public 폴에 넣기
- 변환된 jsx 파일 src/components에 넣기

- 변환된 아바타jsx파일에서 export 해주고 렌더링할 컴포넌트에서 해당 아바타 파일을 import해준다.
  - @react-three/fiber의 Canvas와 @reac-three/drei의 OrbitControls를 가져온 후 camera, style 등을 지정해준다.

</br>


### 3. 움직이는 아바타 만들기
- 위 단계만 했다면 기본 아바타로 출력된다.
- 아바타에 모션을 넣고 싶다면 아래 단계를 적용하면 된다.

-  [Blender](https://www.blender.org) 활용하기 
    - Blender를 활용해 앞서 생성한 glb 파일을 import 후 fbx 파일로 export한다.
    - Path Mode를 copy로 설정
    - Embed Textures 버튼 클릭하기

- [MIXAMO](https://www.mixamo.com/#/)에서 fbx 파일 업로드 후 원하는 모션을 적용한 아바타 파일(fbx)을 다운로드 한다.

</br>

### 4. Blender에서 fbx -> glb 변환
- fbx 파일을 불러왔을 때 아바타의 일부 색이 없어지고 분홍색으로만 인식되는 경우가 생기기도 한다. 이 때는 Material properties 에서 조정하면 된다.
  - 처음 아바타를 만들었을 때는 피부나 복장 색에 맞게 알아서 색이 추출되어 있었는데 이후에 시도했을 때는 다 분홍색으로 돼서 당황스러웠다. 색? 텍스쳐?를 자동으로 인식하지 못하는 것 같아서 아바타를 다시 만들고 다시 넣었더니 각 부위에 맞는 색을 인식하긴 해서 이때의 텍스쳐로 색을 입혔다.
- fbx 파일을 glb로 변환
- React 프로젝트에서 위에서 했던 것 처럼 명령어를 이용해 glb파일을 jsx로 변환하고, glb 파일은 /public에 jsx파일은 /componrnts에 넣어준다.
- 렌더링할 컴포넌트/페이지에서 방금 생성한 모션 아바타 컴포넌트를 import해주면 움직이는 아바타가 화면에 출력된다.

