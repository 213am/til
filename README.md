# React CRA project

- 기존 react project 생성의 기준
- ESLint 설정과 Prettier 통합이 목표

## 1. VSCode Extensions 설치

- ESLint : JavaScript 를 위해서 코드 오류 및 코드 가이드를 도와주는 도구
- ES7+ React/Redux/React-Native/JS snippets : React template 도구
- Error Lens : JS 코드 에러 체크
- Prettier - Code formatter : 문서 formatter

</br>

## 2. React project 기본형 설치

- project 명은 반드시 `소문자`로 생성
- project 명에 특수기호는 `-`만 허용
- 만약 현재 폴더에 프로젝트를 생성하려면 `.`을 작성
- 기본적으로 `git init`이 셋팅

```bash
npx create-react-app@latest 프로젝트명
```

</br>

## 3. 생성된 project 살펴보기

- 진행중인 프로젝트가 있다면 package.json 부터 파악

### 3.1. package.json 살펴보기

- `npm install 모듈명`
- 개발시에 활용한 모듈 파악

```json
// 웹소스에 포함되는 모듈 목록
"dependencies": {}
```

```json
// 개발에만 사용되는 모듈 목록
// 웹소스에는 포함 안됨
"devDependencies": {}
```

- scripts 항목(실행 명령어)

```bash
npm run 명령어
npm run start // **미리보기( 미리보기 종료 : ctrl + c )
npm run build // **최종 전달할 소스 번들링( 압축 )
npm run test // 개발 중 원하는 결과가 나오는지 테스트 시 실행( TDD )
npm run eject // 숨겨진 소스에서 추출하기
```

### 3.2. 불필요한 라이브러리 삭제

- package.json 원본

```json
 "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  }
```

- package.json 수정본

```json
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "5.0.1"
  }
```

- package-lock.json 삭제
- node_modules 폴더 삭제
- 재설치

```bash
npm i
npm install
```

### 3.3. .gitignore 살펴보기

- GitHub 에 업로드 되면 절대 안되는 파일과 폴더 목록
- 실습 `/.env` 파일 만들기

```js
JUMIN_NUM = 000000;
```

- .gitignore 내용 수정 및 추가

```git
# env
.env
```

### 3.4. public 폴더 살펴보기

- `favicon.ico` : 즐겨찾기 및 주소 공유시 보일 이미지
- `logo192.png...` : 휴대폰 바로가기 등에 보일 이미지
- `manifest.json` : react 는 웹 어플리케이션. 앱의 설명을 부여
- `robots.txt` : 검색엔진 노출 여부 작성. 크롤링 여부
- 추가 `sitemap.xml` : 네이버, 구글 검색 등록시 요구 파일
  > 웹페이지에 추가할 모든 리소스( 이미지, 영상, 음악, 폰트 등 ) 배치
- `images` 폴더, `assets` 폴더 배치
- `index.html` : 주석 및 수정사항 정리

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>서비스 타이틀</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

### 3.5. src 폴더 살펴보기

- 제거할 파일들

  > `App.test.js` // 파일명, 폴더명에 `test` 가 있으면 `TDD` 를 위한 파일
  > `logo.svg` // 사용하지 않는 기본 로고
  > `reportWebVitals.js` // `webVitals` 에 필요한 파일
  > `setupTest.js` // `TDD` 를 위한 파일

- index.js
  > 최초 실행되는 js 파일

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// id = root 에 js 실행 결과를 입력
// index.html 에 있는 <div id="root"></div> 변경금지
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

- App.js
  > 화면에 html(jsx) 을 출력한다면 `반드시 대문자`로 파일명 작성

```js
import "./App.css";

function App() {
  return <div>Hello World</div>;
}

export default App;
```

- index.css : css 기본설정

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #000000;
}

ul,
li {
  list-style: none;
}

html {
  font-size: 16px;
}

body {
  font-size: 16px;
}
```

- App.css : 내용만 삭제. 작업하면서 내용 추가

## 4. 협업 프로젝트 개발 환경설정

### 4.1. ESLint

- 반드시 extensions - ESLint 설치하고 진행
- ESLint 버전을 맞춰서 작업해야 함
- 기존에는 `.eslintrc.js` 또는 `.eslintrc.json` 파일
- 최신 버전은 `eslint.config.mjs` 파일
- `.mjs`. 확장자는 ESM 을 나타냄

- ESLint 7 버전으로 셋팅

```bash
npm install eslint@7 -D
```

```bash
npx eslint --init
```

### 4.2. Prettier

- 반드시 extensions - Prettier 설치하고 진행
- `npm i prettier -D`
- 파일로 문서포맷을 관리하도록 한다 `.prettierrc.json` 파일 생성

```js
{
  "singleQuote": false,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

### 4.3. ESLint 와 Prettier 통합 관리

- ESLint 에서 Prettier 에 관련된 규칙도 같이 확인하도록

```bash
npm i eslint-config-prettier -D

npm i eslint-plugin-prettier -D
npm i eslint-plugin-prettier -D --force
```

- .eslintrc.js 에서 Prettier 관리하는 내용의 코드 추가

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
```

### 4.4. ESLint `rules` 설정

- `.eslintrc.js` 로 관리

```js
  rules: {
    "no-unused-vars": "warn",
    // 선언만 하고 사용하지 않은 변수에 대한 처리
    // off     warn      error
  },
```
