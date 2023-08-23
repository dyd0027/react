### 8.7
- 고유한id 만들어주는 라이브러리 uuid
- yarn add uuid
- import { v4 as uuid } from "uuid";
- 사용하고 싶은 곳에서 uuid()

### 8.9 삭제하기
- 삭제할때는 .filter를 사용
   - setTodos(todos.filter((todo)=>todo.id!==없앨꺼.id))
      -> filter 안이 true값인 친구들만 필터링 되어서 나옴
- icon 사용하는거
   - yarn add react-icons
   - https://react-icons.github.io/react-icons/ 에서 확인
   - 원하는 아이콘 선택하면 복사 됨
   - import {위에서복사된글자} from 'react-icons/복사된글자앞접두사'

### 8.11필터적용하기
- 필터링하는 기능이 필요하다면 제일 상단에 있는 컴포넌트에 filter선언해주는게 좋음
   - ![image](https://github.com/dyd0027/react/assets/82923905/1c51d0ae-357c-4e27-ab35-7275fc42cc07)
   - 코드 참조!

### 8.12
- css색상 https://cssgradient.io/
- postcss 쓰는 법: 
   - import styles from '~~.module.css';
   - className = {styles.클래스}
   - module.css에서 css적어주면 됨

### 8.17 다크모드
- ContextAPI사용하는 법
   - 1. jsx파일 생성
   - 2. export const 파일명Context = createContext();
   - 3. export function 파일명Provider({children}){
   const [자식 컴포넌트까지 영향이 갈 변수,set함수] = useState(초기값);
   const 자식 컴포넌트까지 영향이 갈 함수 = () => 사용할 함수 내용
   return <파일명Context.Provider value={{자식 컴포넌트까지 영향이 갈 변수, 자식 컴포넌트까지 영향이 갈 함수}}>{children}</파일명Context.Provider>}
   - 4. 쓰고싶은 컴포넌트 가서 const {자식 컴포넌트까지 영향이 갈 변수, 자식 컴포넌트까지 영향이 갈 함수} = useContext(파일명Context);
      - 간소화: 아까 그 파일로 돌아가서 export const 원하는함수명 = useContext(파일명Context);
   - 5. 4번에서 선언해준 변수, 함수를 원하는대로 쓰면 됨.
   - 그리고 내가 쓰고 싶은 최상위에서 <파일명Provider></파일명Provider>로 감싸주면 됨.

### 8.21
- 새로고침되면 데이터 reset 되는 현상 수정
	- 순서
	1. useEffect으로 localStorage에 저장
	2. setState(초기값세팅함수());
	3. 초기값세팅함수(){ ~localStorage에 JSon형태로 있기 때문에 parsing후~ return parsing값 }
	- useEffect(()=>{localStorage.setItem('변수명', JSON.stringfy(바꿀변수))},[여기들어가는변수가 바뀔 때마다]);
		- localStorage로 데이터 담을때는 JSON형태로 아이템을 저장해서 비교해줘야 함.
		- 
- useState(함수()) -> 함수가 발생할 때마다 useState가 생성되므로 콜백함수로 한번만 호출 되게 해야함
- useState(()=>함수()); -> 솔직히 잘 이해가 안됨.ㅠ 
