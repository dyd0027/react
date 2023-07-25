# react
- 데이터를 State 내부상태 Props외부로 부터 전달받은 상태를 나타내는 render가 있다.
상태가 변경될때마다 re-render됨.
- 크롬에서 React Developer Tools 설치 -> 개발자도구 가서 보면 component 확인 가능
- VS에서 auto import 설치 -> .jsx생성하면 export default 들어 감
- yarn설치: corepack enable
- React 공식 사이트: https://reactjs.org/
  - 공식홈페이지 가보면 single page 는 Create React App: https://create-react-app.dev/ 사용
  - server-randered 할꺼면 next.js 사용하라고 나와있음.
- React안에 많은 lib들이 숨어져 있는데 그 중 중요한 친구 몇 가지만 소개하자면
  - BABEL: 브라우저 버전과 상관없이 예전 js로 변환 시켜줌
  - Webpack: 코드들은 bunding해서 사용자에게 배포
  - ESLint: 코드 이상한거 있으면 빨간 줄
  - Jest: 코드가 잘 구현됐나 test

### nodejs
- 브라우저 밖에서 js를 실행시키게 해줌.
- npm(:외부 라이브러리 쉽게 설치및 관리 해줌) 자동으로 설치됨
- package.json(gradle같은거) 가 생성 됨.

### yarn
- npm의 단점 보안
- yarn create react-app 폴더이름 ->이게 안되면 npx로 설치하고 생성된 폴더에가서 yarn install 
- yarn start: 서버실행

### JSX 규칙
- return 은 하나의 태그만 가능함으로 <></>로 감싸서 해줌.
- className으로 적음
- js 코드를 사용 할 수 있기 때문에 js관련 코드를 작성하려면 {}를 써야 함.
  - style={{}}로 두개 감싸는 이유임
  - 변수 사용할 때 ``안에 써야 함.

### 4.5
- list뽑아 낼 때: 변수.map((item) => ( ~~{item}~~))
- html to react: https://transform.tools/html-to-jsx
  
### 4.7
- js로 만드는 컴포넌트는 .jsx파일로 만들어주는게 약소쿠
  - ts로 만드는 컴포넌트는 .tsx파일로 만들어주기
- export default 는 함수 선언 앞에 적어주는게 편리

### 4.8
- 박스쉐도우: https://cssgenerator.org/box-shadow-css-generator.html

### 4.9
- 컴포넌트에 속성으로 key, value 적어주면 해당 컴포넌트내에서 props 받아서 사용

### 4.10
- props에 boolean값도 보낼 수 있음
  - {props.isNew && ~~~~} : 참일 때를 의미함.

### 4.13
- 컴포넌트를 사용하다가 그 안에서 또 컴포넌트를 만들게 있으면 세세하게 만들어 가면 됨.
  - 처음부터 완벽하게 나눠서 개발해야겠다는 생각 ㄴ

### 4.14
- onClick={()=>{}}로 하던지
- const 함수 이름 = () =>{} 로 선언해서 onClick={함수이름}

### 4.15
- const [변수,set변수] = useState(초기값);
  - 사용할때는 변수만사용
  - 값 변경은 set변수(변경 내용);

### 4.16 중요
- useState에서 set을 여러번 하고 싶을 때는 콜백함수를 사용해야 함.

### 4.18 중요
- prop에 함수도 넘길수 있어서 useState의 set도 넘길 수 있음...

### 4.20
- useEffect은 데이터가 동적일 때 사용함.
  - useEffect(()=>{~~~~~~},[boolean])
