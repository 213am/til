# 1. javaScript 기초

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

- 배열 []

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

- 객체 {}

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

- 함수 : function(){}

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

</br>

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

</br>

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

  > falshy 값으로 정의된 값이 아니면 모두 truthy 로 정의

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

</br>

## 10. null 알아보기

- 변수에 보관한 `값`이 `없다`.
- 개발자가 값이 비었음을 **직접** 표현한다.

```js
const memberInfo = null;

// memberInfo 는 falshy 라서 거짓이 됨
if (memberInfo) {
  console.log("memberInfo가 있어요.");
} else {
  console.log("memberInfo가 없어요.");
}
```

</br>

## 11. undefined 알아보기

- un + defined
- defined 는 값을 셋팅한 상태
- undefined 는 값을 셋팅안한 상태
- 변수의 초기값은 undefined

```js
let isLogin;

// isLogin 의 값은 undefined 가 되므로 falshy 라서 거짓이 됨
if (isLogin) {
  console.log("isLogin 있어요.");
} else {
  console.log("isLogin 없어요.");
}
```

</br>

## 12. symbol 알아보기

- unique 한 값
- 교재 참조
  </br>

## 13. 기본형 데이터 정리

```js
const str = "안녕";
const strName = `홍길동 ${str}하세요`;

const num = 1;
const numNaN = NaN; // Not a Number

const isLogin = false;

const member = null;

let isPoint = undefined;
```

</br>

# 2. 암묵적(묵시적) 데이터형 변환

- 데이터가 나한테 말도 안하고 형태(종류)가 바뀌네?
- 프로그램에 원하지 않는 결과가 도출

```js
const num = 100;
console.log(typeof num, num); // number

const point = "50";
console.log(typeof point, point); // string

const total = num + point; // num + string
//            100 + "50" == 150?
//            100 + "50" == 10050?
console.log(typeof total, total); // string 10050
// num + string => string + string  묵시적으로 type 결정

const minus = num - point; // num - string
//            100 - "50" == 50?
//            100 - "50" == ???
console.log(typeof minus, minus); // number 50
// num - string => num - num  묵시적으로 type 결정

const multiply = num * point; // num * string
console.log(typeof multiply, multiply); // number 5000

const divide = num / point; // num / string
console.log(typeof divide, divide); // number 2
```

</br>

# 3. 명시적 데이터형 변환

- 명시적 데이터형을 지정함
- Number()

  > type 을 number 로 지정하지만
  > number + string 에 대해서는 결과를 도출하지 못함.

- parseInt()
  > type 을 number 로 지정하고
  > number 와 string 을 분리해줌.
  > 하지만, string+number+string 처럼 문자열 사이에
  > number 가 있을 경우에는 다른 방법이 필요하다.

```js
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)
console.log(parseInt("ff", 16));
// 255 (lower-case hexadecimal)
console.log(parseInt("0xFF", 16));
// 255 (upper-case hexadecimal with "0x" prefix)
console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)
console.log(parseInt("123_456"));
// 123
```

```js
const num = 100;
console.log(typeof num, num); // number

const point = "50점";
console.log(typeof point, point); // string

const total = num + parseInt(point); // number + number
console.log(typeof total, total); // number 150

const minus = num - Number(point); // number - number
console.log(typeof minus, minus); // number NaN

const multiply = num * Number(point); // num * number
console.log(typeof multiply, multiply); // number NaN

const divide = num / parseInt(point); // num / number
console.log(typeof divide, divide); // number 2
```

</br>

# 4. 연산

- 수식에 의한 결과값 출력하기

## 4.1. 사칙연산( + - \* / ), 나머지연산(%)

```js
// + 연산
const num_1 = 500;
const num_2 = 50;
const total = num_1 + num_2; // 550

const str_1 = "안녕"; //  string
const str_2 = "반가워"; //  string
const result = str_1 + str_2; // 안녕반가워

const num_3 = 200; //  number
const str_3 = "점이야"; //  string
const result_str_num = num_3 + str_3;
console.log(typeof result_str_num, result_str_num); // string 200점이야

// - 연산
const m_1 = 500;
const m_2 = 1000;
const m_result = m_1 - m_2; // -500

const m_3 = 500; //  number
const m_4 = "안녕"; //  string
const m_result_n_s = m_3 - m_4; // NaN

const m_5 = "500"; // string
const m_6 = "1000"; // string
const m_result_s_s = m_5 - m_6;
console.log(typeof m_result_s_s, m_result_s_s); // number -500

// * 연산
const multi_1 = 5;
const multi_2 = 3;
const multi_result_1 = multi_1 * multi_2; //  15

// type 을 숫자로 바꾸어 보고 결과 출력
const multi_3 = 5;
const multi_4 = "안녕";
const multi_result_2 = multi_3 * multi_4; //  NaN

// / 연산
const div_1 = 10;
const div_2 = 5;
const div_result_1 = div_1 / div_2; //  2

const div_3 = 10;
const div_4 = "안녕";
const div_result_2 = div_3 / div_4; //  NaN

const div_5 = 5;
const div_6 = 0;
const div_result_3 = div_5 / div_6;
console.log(typeof div_result_3, div_result_3); //  number Infinity

// % 연산
const totalReview_1 = 32;
const pageReview_1 = 5;
const tatalResult_1 = totalReview_1 % pageReview_1; //  2

const totalReview_2 = 32;
const pageReview_2 = 0;
const tatalResult_2 = totalReview_2 % pageReview_2;
console.log(typeof tatalResult_2, tatalResult_2); //  number NaN
```

</br>

## 4.2. 복합 연산자( += -= \*= /= %=)

```js
// 복합연산자
let num_1 = 500;

num_1 = num_1 + 5;
num_1 += 5;

num_1 = num_1 - 5;
num_1 -= 5;

num_1 = num_1 * 5;
num_1 *= 5;

num_1 = num_1 / 5;
num_1 /= 5;

num_1 = num_1 % 5;
num_1 %= 5;
```

## 4.3. 증가 감소 연산자( ++ -- )

```js
// 증감 연산자
let num_1 = 500;

num_1++; //  후치
++num_1; //   전치
console.log(num_1); //  501

num_1--;
--num_1;
console.log(num_1); // 499
```

## 4.4. 논리 연산자

- 결과가 true 냐 false 냐

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

```js
// 또는 연산자 (OR 연산자)
let result = true || true; //  true
result = true || false; //  true
result = false || false; //  false
result = "로그인 성공" || "로그인 실패"; //  "로그인 성공"

// 그리고 연산자 (AND 연산자)
result = true && true; //  true
result = true && false; //  false
result = false && true; //  false
result = "로그인 성공" && "로그인 실패"; //  "로그인 실패"

// NOT 연산자
result = !true; //  false
result = !false; //  true
```

## 4.5. 비교 연산자

```
let result = (1 == "1"); //  true   값만 비교
result = (1 === "1"); //  false     값과 type 을 같이 비교

result = (1 != "1"); //  false    값이 같기때문에 false
result = (1 !== "1"); // true     type이 다르기 떄문에 true

result = 1 > 1; //  false
result = 1 < 1; //  false
result = 1 <= 1; //  true
result = 1 >= 1; //  true
```

## 4.6. 병합 연산자

- `기본값을 셋팅`할 때 활용
- `undefined`, `null` 이 아닌 것 찾기

```js
// 병합 연산자
let userName = null;
let displayName = userName ?? "Guest";
console.log("displayName: ", displayName); //  displayName: Guest

/* 0은 falshy한 값이지만 null 또는 undefined 가 아니기 때문에
age 의 값이 출력 */
let age = 0;
let displayAge = age ?? 15;
console.log("displayAge: ", displayAge); //  displayAge: 0
```

## 4.7. 삼항 연산자

- 연산자가 3개라서 삼항이라고 합니다.

```js
// 삼항 연산자
// 결과 = 조건 ? true일 때의 결과 : false일 때의 결과

let age = 10;
let result = age > 18;

/* if (result) {
  console.log("회원가입");
} else {
  console.log("보호자 동의 필요");
} */

result = age > 18 ? console.log("회원가입") : console.log("보호자 동의 필요");

const userRole = "ADMIN";
const url = userRole === "ADMIN" ? "admin.html" : "member.html";
```

</br>

# 5. 조건문(condittion)

## 5.1. if 문

```js
// if 문

const age = 15;
if (age >= 18) {
  console.log("성인");
}

const user = "hong";
if (user) console.log("로그인 성공");

// if else 구문을 일반적으로 사용
if (age >= 18) {
  console.log("성인");
} else {
  console.log("미성년자");
}

// if   else if   else
if (age >= 18) {
  console.log("성인");
} else if (age >= 16) {
  console.log("고등학생");
} else if (age >= 13) {
  console.log("중학생");
} else if (age >= 7) {
  console.log("초등학생");
} else {
  console.log("미취학아동");
}
```

## 5.2. switch 문

```js
// switch 문
const age = 15;
/* switch(조건) 이  case 와 같을 때 동작
같지 않으면 default 로 간다.
범위가 아니기 때문에 용도에 맞는 사용이 필요 */
switch (age) {
  case 18:
    console.log("성인");
    break;

  case 16:
    console.log("고등학생");
    break;

  case 13:
    console.log("중학생");
    break;

  case 7:
    console.log("초등학생");
    break;

  default:
    console.log("미취학아동");
    break;
}

const userRole = "ADMIN"; //  ADMIN   MEMBER    GUEST

switch (userRole) {
  case "ADMIN":
    console.log("관리자 페이지 ADMIN");
    break;
  case "MEMBER":
    console.log("회원 페이지 MEMBER");
    break;
  default:
    console.log("회원가입 GUEST");
    break;
}
```

# 6. 반복문(Loop)

- for 문
  > 몇 번 반복할 지를 프로그래머가 아는 경우

```js
// for 조건이 참인 동안 실행

/* for (초기값; 조건식; 증감) {
  할일;
}
 */

const total = 10;
for (let i = 0; i < total; i++) {
  console.log("안녕", i);
}
// break 는 가까운 for 반복문을 끊어내고 다음 코드 실행
for (let i = 0; i < total; i++) {
  console.log("안녕", i);
  if (i === 2) {
    break;
  }
}
console.log("점심시간");

// 반복 중 일부를 실행하지 않고 무시하면서 반복
for (let i = 0; i < total; i++) {
  console.log("안녕", i);
  if (i % 2) {
    continue;
  }
  console.log("반가워", i);
}

// 전제: for 를 중첩하더라도 2중 for 까지만
// break 를 조금 더 보기
// break 는 가장 가까운 for 를 끊고 다음 코드 실행

// 구구단
for (let i = 1; i < 10; i++) {
  console.log("=== ", i, "단 출력 ===");
  for (let j = 1; j < 10; j++) {
    if (j > 5) {
      // break 의 사용법이 중요
      break;
    }
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```

- while 문

  > 몇 번 반복할 지를 모를 경우

- do while 문
  > 몇 번 반복할 지를 모를 경우
  > 최초 한번은 실행 후 조건을 확인

```js
/* while (조건) {
  할일;
}

do {
  할일;
} while (조건);
 */

let count = 0;

while (count < 5) {
  console.log("while ", count);
  count++;
}

let countDo = 0;

do {
  console.log("do ", countDo);
  countDo++;
} while (countDo < 5);
```

# 7. 함수(function)

- 기능을 { } 블럭에 모으고 이름을 부여하는 것
- 함수는 여러 번 사용하는 기능의 묶음
- 여러 번 사용하므로 JSDOC 을 작성하려고 노력하자
- 여러 번 사용하므로 예외처리를 하려고 노력하자

## 7.1. 함수가 필요한 이유?

- 반복되는 여러 줄의 코드가 있다면 함수로 만들어
  효율적인 사용 가능
- 주어진 재료를 동일한 처리로 결과값을 리턴
- 함수의 기능을 변경하면 모든 곳에 자동으로 반영
- 개발의 속도 및 안정성이 좋다
- **가독성이 엄청 좋아집니다**

## 7.2. 함수 만드는 순서

1. 먼저 반복되는 일들을 `{ }` 로 묶어주기
2. 이름은 `동사`로 짓자
3. 이름 뒤에 `( )` 주자
4. js 를 위해 `function` 키워드 작성

## 7.3. 함수 사용하는 방법

- 이름( ) : 함수 `call`(호출)

## 7.4. 함수에 옵션 주기

- 관례: function 함수명(`매개변수`, `매개변수=기본값`){ 할일 }
- 관례: 매개변수를 \_ 만 쓰는 경우도 있다
- 예시) function 함수명( \_ , 매개변수){ }

```js
// 세금을 계산하고 싶다.
// 월급의 5 % 가 세금이다.
// 월급 = 1,000,000원
// 세금 = 5 %
// 납부 해야할 세금 = 월급 * 0.05

const money = 1000000;
const ratio = 5;
// 함수 안에 변화해야할 값이 있다면 매개변수로
function ratioCalc(_money, _ratio) {
  // 재료가 없는 경우 예외처리
  if (_money === undefined || _ratio === undefined) {
    return "값이 올바르지 않습니다. 확인해주세요.";
  }
  const ratio = _ratio / 100;
  const result = _money * ratio;

  console.log(result);
}

ratioCalc(money, ratio);
```

```js
/**
 *  덧셈 계산기
 *  @param {number} a
 *  @param {number} b
 *  @returns {number}
 */

function add(a, b) {
  if (arguments.length < 2) {
    return "2개의 값이 필요합니다.";
  }
  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }

  const result = a + b;
  return result;
}

add();

/**
 *  뺄셈 함수
 *  @param {number} a
 *  @param {number} b
 *  @returns {number}
 */

function minus(a, b) {
  if (arguments.length < 2) {
    return "2개의 값이 필요합니다.";
  }
  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }

  const result = a - b;
  return result;
}

minus();

/**
 *  나누기 함수
 *  @param {number} a
 *  @param {number} b
 *  @returns {number}
 */

function divide(a, b) {
  if (arguments.length < 2) {
    return "2개의 값이 필요합니다.";
  }
  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }
  if (b === 0) {
    return "분모는 반드시 0보다 커야합니다.";
  }

  const result = a / b;
  return result;
}

divide();
```

````js
/**
 *  계산기
 *  계산기 함수는 2개의 숫자와 1개의 기호를 받습니다.
 *  1개의 기호는 + - / 중 입력합니다.
 *
 *  사용예시
 *  ```javascript
 *  const result = calc("+", 5, 4);
 *  ```
 *  @param {string} sign
 *  @param {number} a
 *  @param {number} b
 *  @returns {number}
 */

function calc(sign, a, b, role = "guest") {
  if (role === "admin") {
    return "관리자님, 환영합니다.";
  }
  if (typeof a !== "number") {
    return "첫번째 값이 숫자여야 합니다.";
  }
  if (typeof b !== "number") {
    return "두번째 값이 숫자여야 합니다.";
  }

  switch (sign) {
    case "+":
      return add(a, b);
      break;

    case "-":
      return minus(a, b);
      break;

    case "/":
      if (b === 0) {
        return "분모는 반드시 0 보다 커야합니다.";
      }
      return divide(a, b);
      break;

    default:
      return "+ - / 중 하나의 기호를 입력해주세요.";
      break;
  }
}

const now = calc("-", 5, 1);

console.log(now);
````

</br>

# 8. 화살표 함수(Arrow function)

## 8.1. 정말 간단한 작성법

> const 이름 = (매개변수) => { }

```js
add();
function add() {
  return 1 + 2;
}
const addA = () => 1 + 2;
addA();
////////////////////////////////////
function minus(a) {
  return a - 2;
}
const minusA = (a) => a - 2;
////////////////////////////////////
function divide(a, b) {
  return a / b;
}
const divedeA = (a, b) => a / b;
////////////////////////////////////
function multi(a, b) {
  console.log("곱셈");
  return a * b;
}
const multiA = (a, b) => {
  console.log("곱셈");
  return a * b;
};
```

## 8.2. 일반 함수와는 다르게 arguments 가 없다.

- `arguments` 대신에 `...rest(rest parametor)`가 있다.

```js
function add(a, b) {
  console.log(arguments);
  return a + b;
}
add(5, 4, 6, 7, 8);
// arguments 안에는 불필요한 데이터들이 많아
// function 실행 시, 메모리가 많이 소모된다
// 따라서 성능최적화를 위해 arrow function 사용이 권장됨

const addA = (a, b, ...aaa) => {
  console.log(aaa);
  return a + b;
};
addA(100, 70, 5, 5, 5, 5, 5);
```
