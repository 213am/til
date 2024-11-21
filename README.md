# Vite

## 1. Vite 와 CRA 의 차이

### 1.1. 프로젝트 생성법

```bash
npx create-react-app@latest 프로젝트명
```

```bash
npm create vite@latest 프로젝트명
```

### 1.2. 간략한 장단점

- Vite 는 차세대 frontend 빌드 도구, 빠른 개발환경 제공
- CRA 는 Webpack 을 활용하지만, Vite 는 Rollup 을 사용합니다.
- HMR( Hot Module Replacelment ) 를 Vite 에서는 신속히 제공한다.
  > 즉, module 교체 시 신속하게 업데이트를 한다.
  > ES module 교체를 이용해서 필요한 부분만 새로고치기 때문에 빠르다.
  > CRA 는 Webpack 으로 번들링하는 시간 및 적용시간이 길어서 테스트시 시간 소비가 크다.
- CRA 는 모든 환경을 제공하므로 초보자가 활용하기 좋음
- Vite 는 개발환경을 이해한 개발자가 활용하기 좋음

## 2. VSCode Extensions 설치

- ESLint 설치
- VS Code ES7+ React/Redux/React-Native/JS snippets 설치
- Simple React Snippets 설치
- Error Lens 설치
- React Hooks Snippets 설치
- Prettier - Code formatter 설치
- settings.json 코드 추가

```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
```

## 3. 프로젝트 구성

- 반드시 소문자(단어-단어) 처럼 특수기호 `-`는 허용
- 자동으로 `git init` 적용
- `git remote add origin 깃허브주소`는 직접 셋팅 필요

## 4. Vite 프로젝트 생성 후 과정

```bash
npm install
```

만약 `yarn` 으로 관리하실 분들은 주의 필요

## 5. 프로젝트 살펴보기

- 자동으로 기본 eslint 설치됨
- package.json

```json
dependency{ }
devDependency{ }
```

### 5.1. .gitignore 에 env 파일 추가

```
# env
.env
```

### 5.2. index.html 수정

```html
<html lang="ko">
  <title>웹사이트명</title>
</html>
```

- main.jsx 로 빌드

### 5.3. public 폴더

- 리소스 배치장소(images, mp4, font ...)

### 5.4. src 폴더

- assets 폴더는 src 에 있는 js 들이 사용하는 리소스

### 5.5. index.css

- 참고사항( :root 사용의 예 )
- `:root`는 html보다 힘이 세다.
- html의 css 와 :root의 css 동시 적용시 :root의 css가 우선시 됨
- `:root`의 css는 html에 css를 적용한 것과 같다.
- html 을 custom 하고 싶을 때 `:root` 를 사용
- 전역으로 사용하고 싶은 style 속성을 적용할 때 `:root`를 활용

```css
:root {
  --primary-color: #000000;
  --secondary-color: #0000ff;
  --font-size-base: 16px;
}

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
  font-size: var(--font-size-base);
  color: var(--primary-color);
}
/* 웹서비스 개발시 권장 */
html,
body,
:root {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
```

### 5.6. eslint.config.js

- 기본값

```js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // dist 폴더는 eslint 검사 제외
  { ignores: ["dist"] },
  {
    //  eslint 검사 대상, 파일명의 확장자
    files: ["**/*.{js,jsx}"],
    //  js 및 jsx 프로그래밍 언어의 옵션
    languageOptions: {
      // js ECMAScript 기준버전
      ecmaVersion: 2020,
      // globals 는 웹브라우저에서는 windows, Node.js에서는 local
      // 웹브라우저를 사용할 건데 window, document ...
      globals: globals.browser,
      // parser : 해석, 풀이
      parserOptions: {
        // latest - ECMA 중에 최신버전을 활용하겠다
        ecmaVersion: "latest",
        // jsx 를 사용하겠다
        ecmaFeatures: { jsx: true },
        // common.js 방식이 아닌 ESModule 방식을 쓰겠다
        // import - export
        sourceType: "module",
      },
    },
    // React 버전
    settings: { react: { version: "18.3" } },
    // ESLint 플러그인
    plugins: {
      // React 문법 규칙이 맞는지 검사
      react,
      // React hooks 의 규칙이 맞는지 검사
      "react-hooks": reactHooks,
      // React 핫리로딩 ESLint 와 직접적 관련은 없음
      "react-refresh": reactRefresh,
    },
    // 검사 규칙
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
```

</br>

## 6. Prettier 설정

- Code-formatter
- settings.json 에서 아래의 코드 확인 및 추가

```json
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
```

### 6.1. 설치

- npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier

### 6.2. `.prettierrc.json` 파일 생성

```json
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

</br>

## 7. ESLint 와 Prettier 통합 설정

- ESLint 에서 Prettier 도 한번에 처리하도록

```js
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier,
    },
    // 규칙 정의
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "prettier/prettier": "warn",
    },
  },
];
```
