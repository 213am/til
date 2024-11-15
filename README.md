# javaScript 기초

## 1. 객체

### 1.1. 가장 간단한 객체 만드는 법

- 우리는 `명칭을 약속`합니다.
- 아래 형식은 무조건 `객체리터럴`이라고 읽어야합니다.

```js
const 객체 = {
  객체키명1: 객체 키값1,
  객체키명2: 객체 키값2,
  객체키명3: 객체 키값3,
}
```

> Sample

- 만약 `한 개의 객체를 생성하는 리터럴`이라면 **camelCase** 사용

```js
const person = {
  userName: "홍길동",
  age: 15,
  isMember: false,
};
```

- 만약 `여러 개의 객체를 생성하는 함수`라면 **PascalCase** 사용
- 공식명칭 `new 생성자 함수(constructor)`

```js
function Student(_age, _isMember) {
  this.age = _age;
  this.isMember = _isMember;
  console.log(this);
}
const student_4 = new Student(12, false);
```

### 1.2. 객체에 기능 추가하기

- `메소드 - method`, `행위 - behavior` 라고 합니다.

#### 1.2.1 객체 `리터럴`

```js
const student_1 = {
  age: 15,
  isMember: true,
  say: function () {
    console.log(this.age);
  },
  cry: () => {
    console.log(this.isMember);
  },
  // method 축약형
  hi() {
    console.log(this);
  },
};
student_1.say(); //  15
student_1.cry(); //  undefined
student_1.hi(); //  student_1
```
