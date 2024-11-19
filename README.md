# Node.js

- 웹브라우저가 아닌 PC 에서 실행되는 javascript
- web server, DataBase 연결, web service 개발 환경 구성 등

## 1. 설치

### 1.1. 웹사이트(https://nodejs.org/en)

### 1.2. NVM(Node Version Manager)

- 여러개의 node.js 버전을 선택해서 설치 및 실행

  > nvm-setup 파일 다운로드

- 설치 환경 확인
  > 터미널

```bash
nvm - v;
```

- 내 PC에 설치된 node.js 목록 확인

```bash
nvm ls
```

- node.js 전체 목록 확인

```bash
nvm list available
```

- 원하는 LTS(Long Term Service) 버전 설치하기

```bash
nvm install 20.18.0
nvm install 20.12.0
```

- 지정한 버전 삭제하기

```bash
nvm uninstall 20.12.0
```

- 원하는 버전 사용하기

```bash
nvm use 20.18.0
```

</br>

## 2. node.js 버전 확인하기

```bash
node --version
node -v
```

</br>

## 3. npm(Node Package Manager) 버전 확인하기

```bash
npm -v
```

</br>

## 4. javascript 프로젝트 구성

- 원하는 소스를 https://www.npmjs.com/ 에서 다운로드
- 수작업으로도 기본 Node.js 프로젝트 생성 가능

### 4.1. Node.js 프로젝트 폴더 및 기본형 생성

- `07-nodejs` 폴더 생성
- 터미널에 `cd 07-nodejs` 입력해 폴더 이동
- `npm init`

### 4.2. Node.js 로 index.js 실행

- `index.js` 생성
- 터미널에 `node index.js` 입력

```js
console.log(Hello Node.js)  //  Hello Node.js
```

- 만약에 `index.js` 가 `src` 폴더에 배치되었다면 `node src/index.js`

### 4.3. 매번 입력하기 어려우므로 script 명령 사용

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node src/index.js"  //  scripts 에 추가
  },
```

```bash
npm run dev
```

</br>

## 5. 모듈 직접 만들어보기

- 모듈(module) : `파일 단위`로 `지역 스코프`를 가진다
- ES6 모듈방식, CommonJS 모듈방식, AMD 모듈방식, UMD 모듈방식
- 지금은 ES6 모듈방식을 기본으로 합니다
- `package.json 을 셋팅하지 않으면 자동으로 commonJS 모듈이 적용`

### 5.1. CommonJS 이해

- util.js

```js
// CommonJs 방식
function say() {
  console.log("안녕하세요");
}
function hi() {
  console.log("반가워요");
}
function smile() {
  console.log(": )");
}
// common.js 에서 외부에 함수를 전달
module.exports = {
  say, //  say: say 객체 속성 축약형***
  hello: hi, //  객체 이름 변경(아주 드문 케이스)
  smile: smile, //  객체 이름과 값이름 같게(축약형 사용 추천)
};
```

-index.js

```js
// 사용하려는 모듈을 불러들인다
// 무조건 최상단에서 코드를 불러들인다
const { say, smile } = require("./util.js");
// 원하는 data만 골라서 사용하기 위해서
// 객체 구조 분해 할당 문법을 이용
// const aaa = require("./util.js) 식으로 사용은 비추천
console.log("Hello Node.js");

say();
// hello();
smile();
```

### 5.2. ES6 모듈의 이해

- 모듈은 `파일 단위`의 `지역 스코프`를 가진다
- 반드시 명시하셔야 합니다.(node.js 를 직접 구성하신다면)
- package.json 에 명시

```json
type: "module"
```

- 예제 1

```js
function say() {
  console.log("안녕하세요");
}
function hi() {
  console.log("반가워요");
}
function smile() {
  console.log(": )");
}
// ES6 module 에서 외부에 함수를 전달
export { say, hi, smile };
```

```js
// 사용하려는 모듈을 불러들인다
// 무조건 최상단에서 코드를 불러들인다
import { say, smile } from "./util.js";
console.log("Hello Node.js");

say();
// hello();
smile();
```

- 예제 2

```js
export function say() {
  console.log("안녕하세요");
}
// 기본값
export default function hi() {
  console.log("반가워요");
}
export function smile() {
  console.log(": )");
}
export function yok() {
  console.log("sakdfasndg");
}
// ES6 module 에서 외부에 함수를 전달
export { say, hi, smile };
```

```js
import hi, { say, smile } from "./util.js";

say();
smile();
hi();
```

- 화살표 함수

```js
export const say = () => {
  console.log("안녕하세요");
};

// hi를 변수로 먼저 선언하고 default로 export하거나, 이름 없는 함수로 export default를 사용해야 합니다.
const hi = () => {
  console.log("반가워요");
};
export default hi;

export const smile = () => {
  console.log(": )");
};

export const yok = () => {
  console.log("sakdfasndg");
};
```

  </br>

## 6. 타인(npm.com)의 모듈 활용하기

- 미리 만들어둔 module 을 다운로드 받아서 활용(open source)
- 체크사항 : `프로젝트 폴더 구조의 변화` 및 `package.json 변화`
- module source 관리는 `npm` 또는 `yarn` 사용
- `npm -v` 로 설치 확인

### 6.1. `npmjs.com`에서 모듈 선택시 고려사항

- `TS` 지원되는지(TypeScript)
- 다운로드 수
- 주기적 관리(version)

### 6.2. 모듈 관련 명령어

- 모듈 설치

```bash
npm i 모듈명
npm install 모듈명
```

- 모듈 제거

```bash
npm uninstall 모듈명
```

- 모듈 초기 셋팅
  > package-lock.json 파일 제거, node_modules 폴더 제거

```bash
npm i
npm install
```
