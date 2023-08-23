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

### 5.3
- 함수 많이 내장되어 있음
- 마우스 움직이는 함수 onPointerMove를 div에 적어줘서 동작 처리하면 됨.

### 5.4
- 연관있는 변수라면 개별적으로 state로 만들지 말고 배열로 만들어쓰면 됨
  - cont [position, setPosition] = useState({x:0, y:0});
  - 특정한 값만 바꾸고 싶다면
	  - setPosition((prev) => ({...prev, x:100}));
   
### 5.6
- Object안에 Object가 있을경우
	- setPosition((prev) => ({...prev, 배열1 :{...prev.배열1,x:100}}));
- ...: 복사한다는 의미

### 5.8
- Object안에 Array가 있을경우
	- setPerson((pre) => ({...pre, pre.mentors.map((mentor)=>({~~~~ return mentor관련}))}))
- 리엑트는 불변성을 유지해야 하므로 변경이 발생한다면 배열과객체 전체를 바꿔줘야 갱신이 됨.

### 5.10
- 삭제할때는 .filter 사용
- 추가 할 때는 배열 선언하는거와 똑같이 해주면 됨 
   - 앞에다가 추가: setPerson((pre)=>({
            ...pre, mentors:[{name:addName, title:addTitle}, ...pre.mentors]
          }))
  - 뒤에다가 추가: setPerson((pre)=>({
            ...pre, ...pre.mentors, mentors:[{name:addName, title:addTitle}]
          }))
    
### 5.12 중요
- reducer: 여러 컴포넌트에서 사용할 수 있는 함수들 모음집같은거
   - 함수명(전 컴포넌트에서 넘겨주는 객체, action){여기서 리턴해 주는 값들은 setState와 같음};
   - useState랑 사용법 비슷함 cont[초기값으로 쓸 변수 명,해당컴포넌트에서 쓸 함수 명(ex.dispatch)] = useReducer(reducer함수명,초기값으로 선언한 값들)
   - dispatch({reducer함수에서 사용할 매개변수안에 있는 값들});

### 5.13
- Immer: useState사용하면 객체들 전부 복사해서 새로 만들어야하는 불편함 해소한 라이브러리
   - yarn add immer use-immer
   - useState랑 사용하는 법 똑같은데 객체 한개한개 찾아서 업데이트가 아님.
   - updateImmer형식으로 명명해줌.

### 5.14
- Form태그 사용할 때 e.preventDefault()를 사용하지 않으면 페이지 refresh 일어남.
- Form태그를 사용할 때에는 useState를 사용해서 상태를 저장해야함.
- const {id, value} = e.target -> 해당 이벤트가 일어나는 태그의 id와 value값을 가져온다는 뜻

### 5.15
- 컴포넌트 재사용 할 때 함수 매개변수로 children 적어주면 저절로 이 전에서 해당 컴포넌트를 불러낼 때 모든 내용이 다 들어간 상태로 재사용 됨.
   - 이미지 첨부에 예시 있음

### 5.17
- 상태값을 props로 전달하면 되는데 만약이게 depth가 10인 컴포넌트까지 내려가면 곤란해지므로 contextAPI사용
   - 번번히 업데이트 되는 상태는 사용하면 XXXX -> 언어설정, 로그인같은 경우만 사용
      - 자주 데이터 변경이 일어나는 경우에는 필요한 곳에서만 API를 사용하면 됨.

### 5.18 다크모드
- ContextAPI사용하는 법
   - 1. jsx파일 생성
   - 2. export const 파일명Context = createContext();
   - 3. export function 파일명Provider({children}){
   const [자식 컴포넌트까지 영향이 갈 변수,set함수] = useState(초기값);
   const 자식 컴포넌트까지 영향이 갈 함수 = () => 사용할 함수 내용
   return <파일명Context.Provider value={{자식 컴포넌트까지 영향이 갈 변수, 자식 컴포넌트까지 영향이 갈 함수}}>{children}</파일명Context.Provider>}
   - 4. 쓰고싶은 컴포넌트 가서 const {자식 컴포넌트까지 영향이 갈 변수, 자식 컴포넌트까지 영향이 갈 함수} = useContext(파일명Context);
   - 5. 4번에서 선언해준 변수, 함수를 원하는대로 쓰면 됨.
   
### 5.20 ->코드 안받아적음 나중에 다시 보기
- 성능개선 할 때는 useCallback(), memo()를 써서 같은 상태가 전달되면 re-render가 안되도록하는건데

### 5.22
- fetch함수에서 .catch().finally()함수 사용 가능.
