# javaScript 기초

---

## 1. 기초 상식

- HTML5(HyperText Markup Language)

```
웹페이지를 구성하는 기본 구조
> 웹페이지와 그 내용, 컨텐츠를 구조화 하기 위해서 사용하는 코드
> 콘텐츠의 구조를 정의하는 마크업 언어
```

- CSS3(Cascading Style Sheets)

```
웹페이지를 꾸미기 위해 사용하는 코드
> 사용자에게 문서를 표시하는 방법을 지정하는 언어(style, layout 등)
> 여기서 문서란, 일반적으로 마크업 언어를 사용하여 구성된 텍스트 파일(html, SVG, XML 등)
> 웹페이지의 특정 요소에 적용할 스타일 그룹을 지정하는 규칙을 정의하는 규칙 기반 언어
```

- JavaScript

```
1. style 제어(CSS) : Interactive(사용자 행동에 대한 제어) 결과로 html, css 변경
> 추가 설명 : css 파일(SCSS 방식, module 방식), emotion, tailwind, bootstrap 등

2. HTML 제어 : Data 를 호출하고 그 결과를 처리할 수 있다.
> 추가 설명 : innerHtml ==> react 에서는 JSX 로 구현

3. 별첨 : html 을 제어하는 것이 아니고 server, DB 를 다루는 javaScript 를 Node.js 라고 한다.
```

</br>

## 2. Web Browser 용 javaScript

- Web Browser 에 js 가 실행 되는 것 테스트 하기(F12 개발자 도구 Console 창 활용)
- 여러줄 작성 시 Shift + Enter 사용해서 줄바꿈

```js
console.log("안녕");
```

</br>

## 3. html 문서에 js 활용하기

- index.html

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript</title>
  </head>
  <body></body>
</html>
```

</br>
- tag 로 js 배치하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript</title>
    <!-- 추가 : javascript code -->
    <script></script>
  </head>
  <body></body>
</html>
```

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript</title>
    <!-- 추가 : javascript code -->
    <script>
      // 추가 : console.log 확인하기
      console.log("안녕");
    </script>
  </head>
  <body></body>
</html>
```

</br>

## 4. html 과 js 분리하기

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript</title>
    <!-- 추가 : javascript code -->
    <script src="./script.js"></script>
  </head>
  <body></body>
</html>
```

```js
console.log("안녕");
```

</br>

## 5. 변수 알기

### 5.1. 변수(Variable)란?

- Web Browser 값, 즉 data 를 임시로 보관한다.

### 5.2. 변수 만드는 법

- 1단계

```
1. 무엇을 보관할 것인가?
> 웹브라우저에 사용자 정보를 보관하고 싶다.

- 이름, 생년월일, 전화번호, 주소, 이메일,
  아이디, 비밀번호, 개인정보동의, ...
```

- 2단계

```
1. 각 항목의 보관할 내용(값, data) 에 대한 고민
- 이름 : 글자(몇자까지 허용할까?)
- 주민번호 : 글자(총 13자리)
- 전화번호 : 글자(총 11자리)
- 주소 : 글자(알 수 없음)
- 이메일 : 글자
- 아이디 : 글자
- 비밀번호 : 글자
- 개인정보동의 : 동의/비동의
```

- 3단계

1.  변수 선언(define)
2.  (=)값의 할당/대입/assign

```js
var 이름;
이름 = "홍길동";

var 주민번호;
주민번호 = "123456789";

var 전화번호;
전화번호 = "01012345678";

var 주소;
주소 = "대구";

var 이메일;
이메일 = "abcd1234@gmail.com";

var 아이디;
아이디 = "aabb";

var 비밀번호;
비밀번호 = "123123";

var 개인정보동의;
개인정보동의 = false;
```

- 4단계
  > tip) const 로 선언해두고 작업하면서 let 으로 변경을 고민한다.

```js
let 이름;
이름 = "홍길동";

const 주민번호 = "123456789";

let 전화번호;
전화번호 = "01012345678";

let 주소;
주소 = "대구";

let 이메일;
이메일 = "abcd1234@gmail.com";

let 아이디;
아이디 = "aabb";

let 비밀번호;
비밀번호 = "123123";

let 개인정보동의;
개인정보동의 = false;
```

</br>

### 5.3. 변수명 잘 만들기

> 명명법, 네이밍 규칙(Naming Convention) 적용하기
> 변수명은 명사 & 영어로

```js
1. 특수문자 중 변수명으로 가능한 글자 : $(달러) _(언더바)

2. 숫자로 시작하는 변수명 불가능
> 예시) 3_name (불가능)     _3name (가능하나 지양)

3. js 에서 사용하는 단어(예약어)는 변수명 활용 불가
> 예시) const if = "안녕";(불가능) const for ="안녕";(불가능)
```

- 카멜:camel: 표기법(<span style="background-color:#fff5b1">c</span>amel<span style="background-color:#fff5b1">C</span>ase)
  > 변수명이 무조건 **소문자로 시작**해서
  > 연결되는 새로운 단어의 시작은 **대문자**로 시작
  > 가장 널리 이용되는 명명법
  > 예시) const **userAddressName**
- 스네이크:snake: 표기법(snake<span style="background-color:#fff5b1">\_</span>case)
  > 변수명을 **모두 소문자**로 작성하고
  > 각 단어의 사이에 \_ 를 삽입
  > 예시) const **user_address_name**
- 케밥:meat_on_bone: 표기법(kebab<span style="background-color:#fff5b1">-</span>case)
  > 변수명으로 사용할 수 없음.
  > js 에서는 - 를 뺄셈 즉, **연산자**로 생각
  > 예외적으로 **Next.js** 의 파일명의 파일이름 컨벤션에 주로 활용
  > 예시) const **nick-name**
- 파스칼:desktop_computer: 표기법(<span style="background-color:#fff5b1">P</span>ascal<span style="background-color:#fff5b1">C</span>ase)

  > 변수명의 **첫 글자를 대문자로 시작**해서
  > 예시) const **Name**; const **NickName**;
  >
  > pascal case 는 용도가 관례상 문법과 상관없이 지정됨.
  >
  > 프로그매머들 사이에서 첫글자가 대문자일 경우,
  > **객체명** 혹은 **객체를 만들어주는 객체 생성자 함수 이름** 혹은
  > **객체를 생성하는 클래스 함수** 로 유추할 수 있다는 관례를 가짐.

  </br>

- 상수 명명규칙(대문자 + 스네이크 표기법)

```js
실제 존재하는 규칙은 아니지만,
암묵적으로 상수를 만들 때는 대문자만 사용

예시) const PI = 3.14;      const APP_NAME = "TODO";
```

- 활용예

```js
let name;
name = "홍길동";

const juminNumber = "123456-1234567";

let phoneNumber;
phoneNumber = "01012345678";

let address;
address = "대구";

let email;
email = "abcd1234@gmail.com";

let id;
id = "aabb";

let password;
password = "123123";

let privacyPolicy;
privacyPolicy = false;

const MEMBER_SIGN_UP = "회원가입 정보 입력";
```

</br>

## 6. 데이터 타입 알기

- 변수에 담을 수 있는 값(data) 은 정해져 있음.

```js
const myAge = 값;
```

- 위의 코드를 읽을 때는

  > 할당기호(=)를 기준으로 오른쪽부터
  > 숫자, 글자 '값' 이 myAge 에 할당된다 고 한다.

### 6.1. 값(data)으로 인정받는 2가지 대분류

- 위 문장을 조금 더 정확하게 표현하면 Data Type 이라 함.
- `원시(Primitive) 타입`, `참조(Reference) 타입` 2가지 종류가 있다.

### 6.2. 원시 타입(Primitive Data Type)

- 기본 데이터 값의 종류

* string : 글자
* number : 숫자
* boolean : 논리적으로 true / false
* undefined
  > 번수를 만들면 기본적으로 셋팅 되는 값
  > 값으로 아무것도 주어지지 않았으면 기본적으로 undefined 셋팅
* null
  > 개발자가 의도적으로 값이 없음을 표현하는 경우
* symbol

  > 최신 ECMA Script 추가 데이터 타입
  > 절대로 겹치지 않는 변수명 및 변수값 보장

* reference 즉, `참조타입(Object)`

### 6.3. 참조 타입(Reference Data Type)

- 기본 활용하기 좋은 경우

```
원시값이 너무 많다. 그렇다면 묶어서 관리할까?
원시값이 서로 관련성이 있는 정보다. 그렇다면 묶어서 관리할까?
```

```js
// 인터파크 쇼핑몰 js 작업 - 공연이 3개일 경우
const 공연명 = "";
const 공연일시 = "";
const 공연포스터 = "";
const 출연진_1 = "";
const 출연진_2 = "";
const 출연진_3 = "";
const 공연가격 = "";
const 예약자수 = "";
const 잔여석 = "";

const 공연명_2 = "";
const 공연일시_2 = "";
const 공연포스터_2 = "";
const 출연진_1_2 = "";
const 출연진_2_2 = "";
const 출연진_3_2 = "";
const 공연가격_2 = "";
const 예약자수_2 = "";
const 잔여석_2 = "";

const 공연명_3 = "";
const 공연일시_3 = "";
const 공연포스터_3 = "";
const 출연진_1_3 = "";
const 출연진_2_3 = "";
const 출연진_3_3 = "";
const 공연가격_3 = "";
const 예약자수_3 = "";
const 잔여석_3 = "";
```

- 배열

```js
// 인터파크 쇼핑몰 js 작업 - 배열
const 공연명 = ["로미오", "아이유", "노트르담"];
const 공연일시 = ["11", "12", "13"];
const 공연포스터 = ["a.png", "b.png", "c.png"];
const 출연진_1 = ["a", "b", "c"];
const 출연진_2 = ["d", "f", "g"];
const 출연진_3 = ["a", "", "c"];
const 공연가격 = [1000, 5000, 25000];
const 예약자수 = [100, 50, 40];
const 잔여석 = [false, false, true];
```

- 객체

```js
// 인터파크 쇼핑몰 js 작업 - 객체
const 로미오 = {
  공연명: "로미오",
  공연일시: "11",
  공연포스터: "a.png",
  출연진_1: "a",
  출연진_2: "d",
  출연진_3: "a",
  공연가격: 1000,
  예약자수: 100,
  잔여석: false,
};
const 아이유 = {
  공연명: "아이유",
  공연일시: "12",
  공연포스터: "b.png",
  출연진_1: "b",
  출연진_2: "f",
  출연진_3: "",
  공연가격: 5000,
  예약자수: 50,
  잔여석: false,
};
const 노트르담 = {
  공연명: "노트르담",
  공연일시: "13",
  공연포스터: "c.png",
  출연진_1: "c",
  출연진_2: "g",
  출연진_3: "c",
  공연가격: 25000,
  예약자수: 40,
  잔여석: true,
};

const 공연 = [로미오, 아이유, 노트르담];
```

- 함수

### 6.4. 호이스팅(Hoisting)

- 코드의 작성 순서가 실행에 영향을 주는 것
- 코드를 가장 상단으로 끌어올려 줌(javaScript 의 엔진이...)
- **var**, **function** 사용시에 호이스팅 발생

```js
var, function 함수명(){}
위의 2가지는 hoisting 이 발생하므로 사용에 유의
```

</br>

## 7. number 알아보기

```js
const num_1 = 5;
const num_2 = 5.4;
const num_3 = Infinity;
const num_4 = -Infinity;
const num_5 = NaN;

console.log(typeof num_1);
console.log(num_2);
console.log(num_3);
console.log(num_4);
console.log(num_5);
```

## 8. string 알아보기

```js
const str_1 = "안녕하세요";
const str_2 = "안";
const str_3 = `반가워`;

const age = 10;
const city = "대구";
// 리터럴 문법
const message = `나는 ${city}에 살고 ${age}살입니다.`;

console.log(typeof str_1);
console.log(str_2);
console.log(str_3);
console.log(typeof str_3);

console.log(message);
```

## 9. boolean 알아보기

- type 별로 if 문 안에서 true/false 취급이 다르다.

```js
const isMember = false;
console.log(typeof isMember, isMember);

const isLogin = true;
console.log(typeof isLogin, isLogin);
// =============================================== //
const isNow = "12시";
console.log("12시", typeof isNow, isNow);
if (isNow) {
  console.log("true 입니다.");
} else {
  console.log("false 입니다.");
}

const isPlay = 100;
console.log(typeof isPlay, isPlay);
if (isPlay) {
  console.log("isPlay true 입니다.");
} else {
  console.log("isPlay false 입니다.");
}

const isPoint = 0;
console.log(typeof isPoint, isPoint);
if (isPoint) {
  console.log("isPoint true 입니다.");
} else {
  console.log("isPoint false 입니다.");
}

const isTeam = "";
console.log(typeof isTeam, isTeam);
if (isTeam) {
  console.log("isTeam true 입니다.");
} else {
  console.log("isTeam false 입니다.");
}

const isItems = [];
console.log(typeof isItems, isItems);
if (isItems) {
  console.log("isItems true 입니다.");
} else {
  console.log("isItems false 입니다.");
}

const isInfo = {};
console.log(typeof isInfo, isInfo);
if (isInfo) {
  console.log("isInfo true 입니다.");
} else {
  console.log("isInfo false 입니다.");
}

const isUndefined = undefined;
console.log(typeof isUndefined, isUndefined);
if (isUndefined) {
  console.log("isUndefined true 입니다.");
} else {
  console.log("isUndefined false 입니다.");
}

const isN = null;
console.log(typeof isN, isN);
if (isN) {
  console.log("isN true 입니다.");
} else {
  console.log("isN false 입니다.");
}
```

### 9.1. 우리는 falshy 한 데이터를 알아야 합니다.

- truthy
  </br>

- falshy
  > 어떤 경우를 false 로 판단하는가?

```js
false;
("");
0;
+0;
-0;
null;
undefined;
NaN;
```
