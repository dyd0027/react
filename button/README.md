### 6.4 
- Styled Components: js에서 css 사용할 수 있게 해주는 컴포넌트, 따라서 css파일을 따로 안만들어도 됨.
   - import {styled, css} from 'styled-components'
   - App.js 확인
- yarn add styled-components

### 6.5
- tailwind: tailwind에서 이미 정해진 css관련 className을 쓰면 잘 먹힘 따라서 사용법을 익여햐 함
- 설치방법
   - yarn add -D tilwindcss
   - npx tailwindcss init
- 설치하고 나면 tailwind.config.js가 생김
   - tailwind.config.js 에서 config = ["./src/**/*.{js,jsx,ts,tsx}"] 작성
   - index.css에 @tailwind base; @tailwind components; @tailwind utilities;
- vs에서 tailwind 설치
- className에 bg-blue-200 rounded-xl px-2(패딩 x축으로)
- 반응형으로도 가능 className="w-16 md:w-32 lg:w-48" 
   - https://tailwindcss.com/docs/responsive-design 에서 확인
