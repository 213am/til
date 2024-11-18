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

#### 1.2.2. `객체의 인스턴스 생성자 함수`

```js
function Student(_age, _member) {
  this.age = _age;
  this.member = _member;
  // 메소드 추가
  this.say = function () {};
  this.cry = () => {};
  this.hi = () => {};
}
// 아래처럼 하면 안되요. 용도를 잘못 생각하고 코딩한것
// Student(10, true);

// 함수만 보아도 new 를 사용하려는 용도임을 앎.
new Student(15, true);
```

</br>

## 2. 배열(Array)

- 데이터 종류와 상관없이 여러개의 데이터를 `순서(인덱싱)` 대로 저장하는 데이터객체

### 2.1. 배열 만드는 법

```js
// 이 방법을 주로 활용 ( 배열 리터럴 )
const 배열명 = [요소1, 요소2, 요소3, ...];

// 이 방식은 사용 빈도가 낮음 ( 배열 객체 생성함수 )
const 배열명 = new Array(5);   //  [ a, b, c, d, e ]

// 배열을 함수를 통해서 만들 수 있음
const 새로운배열 = 기존배열.map();
```

### 2.2. 배열의 요소(각 인덱스 자리)의 값을 찾아서 사용하는 법

```js
const arr = [10, 20, "hello", function () {}, null, undefined, true];
console.log(arr[2]); //  hello

const lunchArr = ["사과", "딸기", "과자", "햄버거"];
const total = lunchArr.length;
console.log(total); //  4

for (let i = 0; i < total; i++) {
  console.log(`${i} 번째 요소는 ${lunchArr[i]}`);
  // 0 번째 요소는 사과
  // 1 번째 요소는 딸기
  // 2 번째 요소는 과자
  // 3 번째 요소는 햄버거
}
```

### 2.3. 배열도 객체라서 속성(property)이 있어요

```js
// 객체
const obj = { 속성명: 속성값, 속성명: 기능 };
const obj = { property명: property값, property명: method };
// 배열
const arr = [];
arr.length = 0;
```

### 2.4. 배열을 다루는 함수에서 `원본을 훼손`하는 배열함수

> \*\* lunchArr 에 담겨있는 [ ] 안의 구성요소를 바꿀 뿐
> 실제 데이터가 저장된 주소를 변경하지는 않기 때문에
> 배열 안의 요소를 변경할 수 있다.

- push(); 배열 `마지막`에 요소 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.push("커피"); //  배열 마지막에 커피를 추가
// 원본이 훼손(변경)
console.log(lunchArr); //  ["사과", "딸기", "과자", "햄버거", "커피"]
```

- pop(); 배열 `마지막` 요소 제거 및 제거된 요소 반환

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.pop(); //   배열 마지막의 햄버거를 제거
// 원본이 훼손(변경)
console.log(lunchArr); //  ["사과", "딸기", "과자"]
```

- unshift(); 배열 `첫번째` 요소 추가

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.unshift("커피"); //  배열 첫번째에 커피를 추가
// 원본이 훼손(변경)
console.log(lunchArr); //  ["커피", "사과", "딸기", "과자", "햄버거"]
```

- shift(); 배열의 `첫번째` 요소 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.shift(); //  배열의 첫번째인 사과를 제거
// 원본이 훼손(변경)
console.log(lunchArr); //  ["딸기", "과자", "햄버거"]
```

- splice(); `원하는 index` 부터 추가, 제거

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.splice(1, 2); //  index 1번으로부터 2개의 요소 제거
// 원본이 훼손(변경)
console.log(lunchArr); //  ["사과", "햄버거"];
```

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.splice(1, 0, "커피", "우유");
//  index 1번으로부터 0개의 요소를 제거하고 2개의 요소 추가
// 원본이 훼손(변경)
console.log(lunchArr); //  ["사과", "커피", "우유", "딸기", "과자", "햄버거"];

lunchArr.splice(1, 2, "도너츠", "콜라");
//  index 1번으로부터 2개의 요소를 제거하고 2개의 요소 추가
// 원본이 훼손(변경)
console.log(lunchArr); //  ["사과", "도너츠", "콜라", "딸기", "과자", "햄버거"];

lunchArr.splice(1); //  index 1번으로부터 이후 모든 요소 제거
// 원본이 훼손(변경)
console.log(lunchArr); //  [ "사과" ];
```

- sort(); 배열의 순서를 정렬하기

```js
const lunchArr = ["사과", "딸기", "과자", "햄버거"];
lunchArr.sort(); //  ㄱㄴㄷ 순
console.log(lunchArr);
//  ["과자", "딸기","사과", "햄버거"];

const enArr = ["k", "o", "r", "e", "a", "j", "p", "A", "n"];
enArr.sort(); //  알파벳 순
console.log(enArr);
//  ['A', 'a', 'e', 'j', 'k', 'n', 'o', 'p', 'r']

const numArr = [1, 2, 12, 25, 37, 30];
numArr.sort(); //  숫자의 크기와 관계없이 앞자리의 숫자로 비교
console.log(numArr); //  [1, 12, 2, 25, 30, 37]
// 내림차순으로 정렬
numArr.sort((a, b) => b - a);
console.log(numArr); //  [37, 30, 25, 12, 2, 1]
// 오름차순으로 정렬
numArr.sort((a, b) => a - b);
console.log(numArr); //  [1, 2, 12, 25, 30, 37]
```

- reverse(); 배열의 요소 `역순`으로 순서변경
  > 정렬과는 관계없음

```js
const numArr = [1, 2, 12, 25, 37, 30];
numArr.reverse();
console.log(numArr); //  [30, 37, 25, 12, 2, 1]
```

- fill(); 요소에 값을 채운다

```js
const numArr = [1, 2, 12, 25, 37, 30];
numArr.fill(0);
console.log(numArr); //  [0, 0, 0, 0, 0, 0]

numArr.fill(8, 2, 4);
// fill(value, 시작 index, 종료 index)
// 8을 2번 index로 부터 4번 index 전까지 넣어라
console.log(numArr); //  [1, 2, 8, 8, 37, 30]
```

- flat(); `배열을 평탄화`
  > flat 을 위한 별도의 라이브러리가 존재
  > react 에서 module 을 설치해서 사용

```js
const numArr = [1, 2, [3, [4, [5], [6, [7]]]], 100];

const result = numArr.flat(1); //  flat(배열의 단계)
console.log(result); //  [1, 2, 3, Array(3), 100]

const result2 = numArr.flat(2); //  flat(배열의 단계)
console.log(result2); //  [1, 2, 3, 4, Array(1), Array(2), 100]

const result3 = numArr.flat(3); //  flat(배열의 단계)
console.log(result3); //  [1, 2, 3, 4, 5, 6, Array(1), 100]

const result4 = numArr.flat(4); //  flat(배열의 단계)
console.log(result4); //  [1, 2, 3, 4, 5, 6, 7, 100]
```

### 2.5. 배열을 다루는 함수에서 `원본을 훼손하지않고` `새로운 배열을 생성`하는 함수

- `데이터 불변성(data immutability)` 유지를 위해서

#### 2.5.1. **map( )**

- 원본 배열의 요소에 동일한 함수 실행 후 새로운 배열로 생성
- 필수

```js
const originArr = ["홍길동", "고길동", "김수한무"];
const copyArr = originArr.map(function (item, index, arr) {
  // console.log(`item: ${item}, index: ${index}, arr:${arr}`);
  const tag = `<div class="userInfo">${item}</div>`;
  // console.log(tag);
  return tag;
});
console.log(`원본 originArr : ${originArr}`);
console.log(`복제본 copyArr : ${copyArr}`);

// 화살표 함수를 이용한 간략화
const copyArrowArr = originArr.map((item, index, arr) => {
  return `<a href="${index}">${item}</a>`;
});
console.log(`원본 originArr : ${originArr}`);
console.log(`복제본 copyArrowArr : ${copyArrowArr}`);
```

#### 2.5.2. filter( )

- 조건에 참인 것만 모아서 배열 리턴
- 자주 사용

```js
const memberHong = {
  age: 10,
  name: "홍길동",
  role: "GUEST",
};
const memberKim = {
  age: 18,
  name: "김수한무",
  role: "MEMBER",
};
const meberPark = {
  age: 25,
  name: "박둘리",
  role: "ADMIN",
};

const originArr = [memberHong, memberKim, meberPark];
const result = originArr.filter((item, index) => {
  return item.role === "ADMIN"; //  [{memberPark}]
  return item.age <= 20; //  [{meberHong}, {memberKim}]
});
console.log(result);
```

#### 2.5.3. slice( )

- 배열의 일부를 복사한다

```js
const numArr = [1, "a", "b", 4];
const nowArr = numArr.slice(1, 3);
// 시작 index 1로부터 종료 index 3 미만의 요소만 출력
console.log(nowArr); //  ["a", "b"]
```

#### 2.5.4. concat( )

- 배열을 `합쳐서` 하나의 배열을 리턴

```js
const numArr1 = [1, "a", "b", 4];
const numArr2 = [8, 100];
const result = numArr1.concat(numArr2);

console.log(result); //  [1, "a", "b", 4, 8, 100]
```

#### 2.5.5. reduce( )

- 배열의 요소를 탐색하면서 누적 연산
- 누적된 결과를 출력함

```js
const numArr1 = [1, 2, 3, 4];
// 문법이 좀 다릅니다
// 보통은 (item, index, arr)
// const total = numArr1.reduce(함수, 초기값);
const total = numArr1.reduce((acc, cur) => {
  console.log("acc : ", acc); //  초기값
  console.log("cur : ", cur); //  요소
  return acc + cur;
}, 0);
console.log("total: ", total); //  total: 10
```

#### 2.5.6. join( )

- 문자열로 배열을 연결한 결과를 만든다

```js
const numArr1 = [1, 2, 3, 4];
const result = numArr1.join();
console.log(`type : ${typeof result},${result}`);
//  type : string / 1,2,3,4

const result = numArr1.join("#");
console.log(`type : ${typeof result},${result}`);
//  type : string / 1#2#3#4
```

#### 2.5.7. indexOf( )

- 찾는 요소가 몇번째 index 인지를 파악

```js
const numArr1 = [1, 2, 3, 4];
const result = numArr1.indexOf(3);
console.log(`type : ${typeof result}, ${result}`);
//  type : number, 2

const result = numArr1.indexOf(100);
console.log(`type : ${typeof result}, ${result}`);
//  type : number, -1
// 찾지 못하면 -1 (falthy 한 값)
```

#### 2.5.8. includes( )

- 요소가 포함되었는지 아닌지

```js
const numArr1 = [1, 2, 3, 4];
const result = numArr1.includes(3);
console.log(`type : ${typeof result}, ${result}`);
//  type : boolean, true

const result = numArr1.includes(20);
console.log(`type : ${typeof result}, ${result}`);
//  type : boolean, false
```

## 3. 객체 { } 와 배열 [ ] 필수 이해

### 3.1. 반복문

- 배열
  > map, forEach 문, for 문, for of 문, for in 순서로 추천

```js
const numArr = [1, 2, 3, 4];

// 배열에서 요소에 접근하는 전통적 방식 - for 문
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// 다음 버전 - forEach 문
// numArr.forEach((item, index, arr) => {});
numArr.forEach((item) => {
  console.log(item);
});

// 최신 버전 - for of 문
for (const item of numArr) {
  console.log(item);
}

// map( )
numArr.map((item) => {
  console.log(item);
});

// for in 문 - 객체 반복문에 사용 추천
const strArr = ["a", "b", "c"];
for (const item in strArr) {
  console.log(item); //  0 1 2 - index number
  console.log(strArr[item]); //  a b c
}
```

- 객체
  > for in 문

```js
const person = {
  age: 10,
  nickName: "hong",
  isMember: false,
};
person.hi = "반가워"; //  key: hi, value: "반가워" 추가

// for in 문 - 객체 속성 반복 구문
for (item in person) {
  console.log(item);
  //  age  nickName  isMember  hi  속성명
  console.log(person[item]);
  // 10  hong  false "반가워"  속성값
}

// value만 출력하고 싶을때 ( 비추천 )
Object.values(person).forEach((key) => {
  console.log(key);
  // 10  hong  false "반가워"
});

// key만 출력하고 싶을때 ( 비추천 )
Object.keys(person).forEach((value) => {
  console.log(value);
  //  age  nickName  isMember  hi
});

// key, value 출력하고 싶을때 ( 비추천 )
Object.entries(person).forEach((key, value) => {
  console.log(key, value);
  //  ['age', 10] 0
  //  ['nickName', 'hong'] 1
  //  ['isMember', false] 2
  //  ['hi', '반가워'] 3
});
```

- 정리

```js
배열 : map( ), forEach( ), for
객체 : for( in ){ }
```

### 3.2. 값 추출하여 보관

- 배열

```js
const arr = ["사과", "딸기", "바나나"];

// 아래 방식을 잘 사용하지 않음
// const apple = arr[0];
// const strawberry = arr[1];
// const banana = arr[2];

// Spread 문법 - ... 작성
const [apple, strawberry, banana] = [...arr]; //  축약형
console.log(apple); //  사과
console.log(strawberry); //  딸기
console.log(banana); //  바나나

// Spread 문법으로 배열 합치기
const newArrOld = ["감자", arr[0], arr[1], arr[2], "고구마", "상추"];
const newArr = ["감자", ...arr, "고구마", "상추"];
console.log(newArr);
//  ["감자", "사과", "딸기", "바나나", "고구마", "상추"]

// rest parameter 문법
function go(a, b, ...rest) {
  //  a 는 1
  //  b 는 2
  //  rest = [3, 4, 5, 6, 7]
}
go(1, 2, 3, 4, 5, 6, 7);
```

- 객체

```js
const person = {
  age: 10,
  nickName: "홍길동",
  level: 5,
};
// const a = person.age;
// const b = person.nickName;
// const c = person.level;

// 객체의 구조를 분해해서 할당 - 객체 구조 분해 할당
const { age, nickName, level } = {
  age: 10,
  nickName: "홍길동",
  level: 5,
}; //  간략화
```
