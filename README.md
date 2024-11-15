# javaScript 기초

</br>

## 1. 함수(function)

### 1.1. 함수를 만들어야 할 시점

#### 1.1.1. 코드의 길이

> 한 개의 결과를 만들기 위해서 필요한 코드가 너무 긴 경우

- 코드 가독성이 너무 떨어진다고 판단될 시
- 하나의 과정을 작성하기 위해서 너무 많은 코드가 작성된 경우
- 여러 줄이 작성되어서 한 개의 결과를 만든다면 함수로 묶어줄 수 있을지 고민해보자

#### 1.1.2. 동일한 기능의 사용빈도

- 2번 이상 동일한 기능이 사용된다면 함수로 만들지 여부를 고민
- 2번 이상 동일한 기능이 사용되는데 data 만 다르다면?

#### 1.1.3. 코드의 재사용

> - 협업이 필요할 때
> - 코드를 공유할 때

</br>

### 1.2. 함수를 만드는 방법

- **{ }** 즉, 코드블럭을 이용해서 코드를 묶어준다.
- 이름을 지어준다. 이때 이름은 **동사**로 정한다.
- 이름 뒤에 **( )** 를 붙인다.
- js 를 위해서 **function** 이라고 적는다.
- 재료가 필요하면 **( 매개변수, 매개변수 )** 로 전달한다.
  > 재료가 필요하면 **( parameter, parameter )** 로 전달한다.
- 함수를 만들 때는 **JS Doc** 을 작성해주면 좋다.

</br>

### 1.3. 함수 사용법

- `함수명( )`
- 호출, 실행, call 한다.

</br>

### 1.4. 샘플코드

````JS
/**
 *  너비와 높이 값을 이용한 면적 계산 함수
 *  @param {number} _width
 *  @param {number} _height
 *  @returns {number}
 *
 * ---- 함수 사용 예제 ----
 * ```javascript
 *  calcRect(100, 30)
 * ```
 */

function calcRect(_width, _height) {
  const width = _width;
  const height = _height;
  const result = width * height;
  // 함수 실행 결과를 돌려준다
  // return : 위의 코드를 통해서 나온 결과를 돌려준다
  return result;
}

const now = calcRect(400, 50);

console.log(now);

````

</br>

## 2. 화살표 함수(arrow function)

### 2.1. 화살표 함수가 필요한 이유

- 함수의 간략화
- 함수의 최적화
  > arguments 를 사용하지 않아서
  > 메모리를 절약하고 성능 최적화가 가능
- this 의 값 고정
  > 그때 그때 다르지 않고 항상 동일하다
- new 를 사용하지 못함

### 2.2. 화살표 함수 만들기

- 화살표 함수는 **변수 선언을 하듯이** 생성한다.
- **const** 를 활용한다.
- 이름을 **동사**로 만든다.
- **값으로 함수**를 작성한다.
- 함수는 **익명함수**로 한다.
- function 대신에 **=>** 로 표현한다.

### 2.3. 화살표 함수 사용하기

- **이름( );** 로 실행
- 주의사항 : **hoisting 이 안된다**.

````js
/**
 *  너비와 높이 값을 이용한 면적 계산 함수
 *  @param {number} _width
 *  @param {number} _height
 *  @returns {number}
 *
 * ---- 함수 사용 예제 ----
 * ```javascript
 *  calcRect(100, 30)
 * ```
 */

const calcRectArrow = (_width, _height) => {
  const width = _width;
  const height = _height;
  const result = width * height;
  // 함수 실행 결과를 돌려준다
  // return : 위의 코드를 통해서 나온 결과를 돌려준다
  return result;
};
````

### 2.4. 여러가지 화살표 함수의 예

```js
// parameter 가 없는 경우는 ( ) 반드시 입력
function say() {
  console.log("안녕");
}
const sayArrow = () => {
  console.log("hi");
};

// parameter 가 1개인 경우 ( ) 생략도 가능
function sayWord(word) {
  console.log(word);
}
const sayWordArrow = (word) => {
  console.log(word);
};

// parameter 가 2개 이상인 경우
function sayWordText(word, text) {
  console.log(word, text);
}
const sayWordTextArrow = (word, text) => {
  console.log(word, text);
};

// parameter 가 없고 함수 결과를 return 하지 않는 경우
function noReturn() {}
const noReturnArrow = () => {};

// parameter 가 없고 함수 결과를 return 하는 경우
function yesReturn() {
  return 1;
}
const yesReturnArrow = () => {
  return 1;
};
// 결과값이 딱 1줄 일 때는 return 과 { } 생략도 가능
const yesReturnArrow2 = () => 1;

// return 샘플 코드 1줄짜리 예제
const isLogin = true; // 로그인 상태 확인
// if문 사용 - 4줄의 return 이 있어 { } 생략 불가
const userLogin = () => {
  if (isLogin === true) {
    return "로그인";
  } else {
    return "로그아웃";
  }
};

// 삼항연산자 사용 - 1줄의 return 이 있어 { } 생략 가능
const userLoginArrow = () => (isLogin ? "로그인" : "로그아웃");

// 3배의 값을 계산
const countTriple = (_num) => _num * 3;

// 화살표 함수 사용시 주의사항
// parameter 가 1개인 경우라도 배열이나 객체 구조라면 ( ) 생략 불가
const parseJsonArrow = ({}) => {
  console.log("실행");
};
```

</br>

## 3. 변수 및 함수의 접근 가능한 유효범위( Scope )

- 제일 중요한 것이 `{ }` 코드 블럭의 이해

### 3.1. scope 의 종류

- 전체 영역 : 전역 스코프 ( `global scope` )
- 특정 영역 : 지역 스코프 ( `local scope` )

### 3.2. 전역 스코프

- 프로그램 어디서든 마음대로 사용가능
- 변수든, 함수든 마음대로 사용가능
- 전역 변수의 예

```js
// 전역 변수
const appName = "Todo";

// 지역 변수 영역 { }
{
  console.log(appName); //  Todo
}

// 함수 지역 범위 { }
function showAppName() {
  console.log("함수 안 지역: ", appName); //  함수 안 지역: Todo
}
showAppName();
```

- 전역 함수의 예

```js
function say() {
  console.log("안녕");
}
const sayArrow = () => {
  console.log("반가워");
};

say();
sayArrow();

{
  say();
  sayArrow();
}

function showHi() {
  say();
  sayArrow();
}
showHi();
```

### 3.3. 지역 스코프

- `특정 { }` 안에서만 사용가능

```js
// 지역 변수 scope 생성
{
  const age = 10;
}

console.log(age); //  age is not defined

// 지역 함수 scope 생성
{
  // hoisting 발생
  function hi() {
    console.log("안녕 백엔드?");
  }
}
// 접근 가능
hi();

// 지역 scope 에 arrow function 생성
{
  const go = () => {
    console.log("가자");
  };
}
// 접근 오류
go();
```

- function 함수( ){ `지역스코프` }

```js
// 함수 안에 만들어진 함수(중첩 함수)의 scope 를 이해하자
function 외부함수() {
  function 내부함수() {
    console.log("내부함수");
  }-
  const 화살표함수 = () => {
    console.log("화살표함수");
  };
  내부함수();
  화살표함수();
}
외부함수(); //  정상작동 - 내부함수  화살표함수
// 중첩 함수는 hoisting 이 발생하지 않음
내부함수(); //  내부함수 is not defined
화살표함수(); //  화살표함수 is not defined
```

### 3.4. this - 오류의 원인

#### 3.4.1. global scope 의 this 는 window

```js
console.log("글로벌 this: ", this); //  글로벌 this: window
```

#### 3.4.2. 화살표 함수 안쪽의 this 는 window 가 아닐 수 있다.

- global scope 에 생성된 arrow function 의 `this` 는 **window**
- `this 로 변수를 참조하면 안된다.` 이유는 window 를 참조하므로
- 이런 경우 화살표 함수에서는 this 사용을 지양

```js
const go = () => {
  const age = 10;
  console.log("화살표 this: ", this); //  window
  console.log("화살표 age: ", age); //  지역변수
  console.log("화살표 this.age: ", this.age);
  //  undefined( 전역변수 age를 탐색 )
};
go();
```

- `객체`라는 곳에 기능(함수), 즉 `method` 에 만약 `화살표 함수`로 `this` 를 쓴다면? **window**
- `this 로 변수를 참조하면 안된다.` 이유는 `window 를 참조`하므로
- 이런 경우 화살표 함수에서는 this 사용을 지양

```js
// 기본 데이터를 묶어서({ } 안에 모아서) 관리할 수 없을까?
// Object - data type
const Person = {
  userName: "홍길동", //  속성(Property)
  age: 20, //  속성(Property)
  korean: true, //  속성(Property)
  say: () => {
    //  행동, 기능(Method)
    console.log("안녕", this);
    console.log("안녕", this.userName); //  undefined
    console.log("안녕", this.age); //  undefined
    console.log("안녕", this.korean); //  undefined
  },
  cry: () => {
    //  행동, 기능(Method)
    console.log("ㅠㅠ", this);
  },
};

console.log(Person.userName); //  홍길동
console.log(Person["userName"]); //  홍길동
console.log(Person.age); //  20
console.log(Person.korean); //  true;
Person.say(); //  안녕 window
Person.cry(); //  ㅠㅠ window
```

- `일반 함수 안쪽에 화살표 함수를 중첩`해서 사용시 `this` 는? **window**
- `this 로 변수를 참조하면 안된다.` 이유는 `window 를 참조`하므로
- 이런 경우 화살표 함수에서는 this 사용을 지양

```js
function go() {
  const age = 10;
  const say = () => {
    const hobby = "축구";
    console.log(this);
    console.log(this.age); //  undefined
    console.log(this.hobby); //  undefined
  };
  say();
}
go(); //  window
```

- `비동기 함수`에서의 `화살표 함수의 this` 는? **window**
- `this 로 변수를 참조하면 안된다.` 이유는 `window 를 참조`하므로
- 이런 경우 화살표 함수에서는 this 사용을 지양

```js
// 시간이 오래 걸리는 작업을 가지고 테스트
function Timer() {
  let count = 0;
  // 타이머 함수를 이용해서 오래 걸리도록 샘플
  // 웹브라우저에 기본 내장 되어있는 즉, Built-in 이 되어 있는 함수(내장함수)
  // setInterval(할일, 간격);
  setInterval(() => {
    count++;
    console.log("안녕: ", this);
    console.log("안녕: ", this.count); //  undefined
    this.count++; //  undefined + 1
    console.log("안녕: ", this);
    console.log("안녕: ", this.count); //  NaN
  }, 1000);
}

Timer();
```

- `class 에 화살표 method` 를 사용시 this 는? **window 가 아닌 instance** 를 가리킴
- instance 안에서 this 는 **instance** 를 가리킨다.

```js
class Student {
  // new Student() 실행시 자동실행
  // 객체를 생성하는 함수 - 기본 생성자 함수
  constructor() {
    console.log("학생 한 객체 인스턴스를 만들어요.");
  }
  count = 1;
  say = () => {
    console.log("instance: ", this); //  Student
    console.log("instance.count: ", this.count); //  1
  };
}

const st = new Student();
st.say();
```

#### 3.4.3. 일반 함수 안쪽의 this 는 window 가 아닐 수 있다.

- global 영역의 `function 의 this` 는? **window**

```js
function go() {
  const age = 10;
  console.log(this); //  window
  console.log(age); // 지역변수
  console.log(this.age); //  undefined
}
go();
```

- `객체`라는 곳에 기능(함수), 즉 `method` 에 만약 `function`으로 `this` 를 쓴다면? **객체 자기자신을 가리킨다**
  > function 을 작성한 scope 가 this 가 된다

```js
const Person = {
  userName: "홍길동", //  속성(Property)
  age: 20, //  속성(Property)
  korean: true, //  속성(Property)
  say: function () {
    //  행동, 기능(Method)
    console.log(this); //  Person
    console.log(this.userName); //  홍길동
    console.log(this.age); //  20
    console.log(this.korean); //  true
  },
  cry: function () {
    //  행동, 기능(Method)
    console.log(this); //  Person
  },
};
```

- `비동기 함수`에서의 `function 의 this` 는? **window**
- `누가` function 을 `call` 했는지가 중요

```js
function Timer() {
  let count = 0;
  setInterval(function () {
    // function 을 실행하는 주체가 window 라서
    console.log("안녕: ", this); //  window
  }, 1000);
}
Timer();
```

- `class 에 화살표 method` 를 사용시 this 는? **window 가 아닌 instance** 를 가리킴
- instance 안에서 this 는 **instance** 를 가리킨다.
- `누가` function 을 `call` 했는지가 중요

```js
class Student {
  constructor() {
    console.log("학생 한 객체 인스턴스를 만들어요.");
  }
  count = 1;
  say = function () {
    console.log("instance: ", this); //  Student
    console.log("instance.count: ", this.count); //  1
  };
}

const st = new Student();
st.say();
```

</br>

## 4. 콜백함수(Callback Function)

- 함수(Function, Arrow Function) 를 parameter 로 전달하는 것
- parameter 의 값으로 전달되는 함수를 말함
- 비동기 즉, server 연동(Request, Response) 후에 함수실행
- 이벤트 기반 함수 실행(클릭했을 떄, html이 완성되었을 때)

### 4.1. 아래 모두 동일한 코드

-가능하면 마지막 방식을 추천

```js
function run(함수) {
  함수();
}
///////////////////////////////////// this issue 가 생길 수 있음
function say() {
  console.log("say");
}
function cry() {
  console.log("ㅠㅠ");
}

run(function () {
  console.log("say");
});
run(function () {
  console.log("ㅠㅠ");
});
/////////////////////////////////////
const say = () => {
  console.log("say");
};
const cry = () => {
  console.log("ㅠㅠ");
};

run(say);
run(cry);
///////////////////////////////////// 추천
run(() => {
  console.log("say");
});
run(() => {
  console.log("cry");
});
```
