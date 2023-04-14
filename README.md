# react
### 특징
- 리액트는 데이터바인딩(백에서 가져온 데이터를 html에 넣는거)이 쉽게 됨.
- 태그안에 들어가는 style은 무조건 아래와 같이
  - style={{color:'blue', fontSize:'30px'}} 
### npx
- node.js가 있어야 쓸 수 있음 + 라이브러리(create-react-app) 설치를 도와주는 명령어
  - npx create-react-app blog
  - vs -> termainal에 입력하면 react에 관련된게 다 들어감
  - npm start: 서버실행
### app.js
- 메인페이지에 들어갈 html 짜는 곳
- index.html 안에 id="root"인 곳에 app.js코드가 가게 되어있음.
  - 이 들어가게 하는 코드는 index.js에 선언되어 있음.
### JSX
- react는 html같지만 JSX라는 문법을 씀.
### state
- 데이터 저장소
- 사용이유
  - 웹이 app처럼 동작하게 만들고 싶어서 사용
  - HTML이 자동으로 재렌더링 됨
  - 새로고침 없이도 state데이터가 변경 되면 바로 반영 됨
  - 따라서 중요하거나 자주 변하는 데이터는 무조건 state에 넣어야 함
- state는 직접 수정 안됨
  - state 변경하고 싶으면 배열을 deep copy ==> [...배열이름]해서 그 배열을 다시 넣어주는거!!!! -->[...복사할배열,Obj]
