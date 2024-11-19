# 비동기(Asynchronous)

- `비동기`란 오랜 시간이 걸리는 작업
- ex) 서버에 데이터를 요청, 또는 파일을 읽고 쓰는 행위 등
- `비동기처리`는 시간이 많이 걸리는 작업 중 `다른일도 같이 처리`하도록 진행하는 것
- 백엔드 API 샘플 사이트(https://jsonplaceholder.typicode.com/)

## 1. 종류

- XHR(Xml Http Request)
- Callback
- Promise
- Async / Await

### 1.1. XHR

> xhr.status === 200 단위면 정상적인 자료 Response
> xhr.status === 400 단위면 잘못된 값으로 Request
> xhr.status === 404 면 없는 페이지다
> xhr.status === 500 단위면 서버가 오류

- 서버와 통신하는 작업을 위해 기본적으로 제공
- `Request` : 서버에 `자료를 요청`하는 것
- `Response` : `요청이 자료로` 반환된 결과
- 지금은 자주 사용하지 않습니다.

````js
/**
 *  getPost 함수는 백엔드 서버에 등록된 게시글 가져오기
 *
 *  사용법
 *  ```javascript
 *  getPosts( )
 *  ```
 */

// 함수 정의
function getPosts() {
  //  1. xhr 1개 생성
  const xhr = new XMLHttpRequest();
  //  2. 백엔드에서 알려준 주소로 요청을 실행할 함수
  // xhr.open("방식", "데이터주소")
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  //  3. 웹브라우저로 요청을 보낸다
  xhr.send();
  //  4. 요청에 대한 결과를 처리하는 함수
  xhr.onload = function () {
    console.log("요청이 된 경우 결과 : ", xhr);
    //  200 단위는 정상적인 처리완료
    if (xhr.status === 200) {
      // 처리 완료
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("존재하지 않는 페이지입니다");
    } else if (xhr.status === 505) {
      console.log("서버에 문제가 생겼습니다");
    }
  };
}
// 함수 호출
getPosts();
````

### 1.2. Callback

- 비동기 작업이 종료시 처리할 함수를 전달하여 처리

```js
// 서버에서 데이터 가져오기
function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      // 할일 : posts data를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}
function getAlbums() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      // 할일 : albums data를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}
function getTodos() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      // 할일 : todos data를 html 태그로 만들고 화면에 배치
    } else {
      console.log("서버에러", xhr.status);
    }
  };
}

// 위의 코드에서 동일한 작업이 많기 때문에 하나의 함수로 묶어서 처리
// callback 함수 활용
function getDatas(apiString = "", callBack = function () {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callBack(xhr.responseText);
    } else {
      console.log(apiString + " ERROR", xhr.status);
    }
  };
}

function postsParse(data) {
  console.log("posts data 처리완료", data);
}
function albumsParse(data) {
  console.log("albums data 처리완료", data);
}
function todosParse(data) {
  console.log("todos data 처리완료", data);
}
function usersParse(data) {
  console.log("users data 처리완료", data);
}

getDatas("posts", postsParse);
getDatas("albums", albumsParse);
getDatas("todos", todosParse);
getDatas("users", usersParse);
```

#### 1.2.1 Callback Hell

- 함수의 요청 순서를 사용자가 직접 관리해야함(단점)

```js
// callback 함수 활용
function getDatas(apiString = "", callBack = function () {}) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200) {
      callBack(xhr.responseText);
    } else {
      console.log(apiString + " ERROR", xhr.status);
    }
  };
}

function postsParse(data) {
  console.log("posts data 처리완료", data);
}
function albumsParse(data) {
  console.log("albums data 처리완료", data);
}
function todosParse(data) {
  console.log("todos data 처리완료", data);
}
function usersParse(data) {
  console.log("users data 처리완료", data);
}

getDatas("posts", (data) => {
  postsParse(data, () => {
    getDatas("albums", (data) => {
      albumsParse(data, () => {
        getDatas("todos", (data) => {
          todosParse(data, () => {
            getDatas("users", (data) => {
              usersParse(data, () => {});
            });
          });
        });
      });
    });
  });
});
```

### 1.3. Promise

- 서버 연동이 끝날 때, 원하는 callback 함수를 실행
- 비동기 작업이 완료되면 결과를 알려주는 방식

```js
// callback 함수 활용
function getDatas(apiString = "") {
  // promise 의 결과를 돌려받는다
  // new Promise 라고 한 것은
  // promise 로 만들어진 결과는 성공/실패에 대한 결과가 담겨있다
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(apiString + " ERROR", xhr.status);
      }
    };
  });
}

function postsParse(data) {
  console.log("posts data 처리완료", data);
}
function albumsParse(data) {
  console.log("albums data 처리완료", data);
}
function todosParse(data) {
  console.log("todos data 처리완료", data);
}
function usersParse(data) {
  console.log("users data 처리완료", data);
}

getDatas("posts")
  .then((data) => {
    postsParse(data);
    return getDatas("albums");
  })
  .then((data) => {
    albumsParse(data);
    return getDatas("todos");
  })
  .then((data) => {
    todosParse(data);
    return getDatas("users");
  })
  .then((data) => {
    usersParse(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### 1.3.1. Promise 는 2개의 callback 함수를 parameter 로 전달받는다

- resolve callback 함수 : 정상적인 결과가 있을 때
- reject callback 함수 : 비정상적인 결과 즉, Error 가 있을 때

#### 1.3.2. Promise 는 3개의 상태가 있다

- Pending : 결과 대기중...
- Resolved : 성공됨
- Rejected : 실패함

### 1.4. async / await

- function 앞에 반드시 `async` 키워드 작성
- function 안쪽에 `try{ } catch{ }` 작성 권장

```js
// callback 함수 활용
function getDatas(apiString = "") {
  // promise 의 결과를 돌려받는다
  // new Promise 라고 한 것은
  // promise 로 만들어진 결과는 성공/실패에 대한 결과가 담겨있다
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/" + apiString);
    xhr.send();
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(apiString + " ERROR", xhr.status);
      }
    };
  });
}

function postsParse(data) {
  console.log("posts data 처리완료", data);
}
function albumsParse(data) {
  console.log("albums data 처리완료", data);
}
function todosParse(data) {
  console.log("todos data 처리완료", data);
}
function usersParse(data) {
  console.log("users data 처리완료", data);
}

// 순차적 Promise 실행
async function getAllData() {
  try {
    const postsData = await getDatas("posts");
    postsParse(postsData);

    const albumsData = await getDatas("albums");
    albumsParse(albumsData);

    const todosData = await getDatas("todos");
    todosParse(todosData);

    const usersData = await getDatas("users");
    usersParse(usersData);
  } catch (error) {
    console.log(error);
  }
}

// 화살표 함수에서 async 를 붙이는 위치
// const getAllData = async() => { }

getAllData();
```

## 2. fetch 를 활용한 외부 API 연동

```js
async function getAllData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    console.log("post : ", data);

    res = await fetch("https://jsonplaceholder.typicode.com/albums");
    data = await res.json();
    console.log("album : ", data);

    res = await fetch("https://jsonplaceholder.typicode.com/users");
    data = await res.json();
    console.log("user : ", data);
  } catch (error) {
    console.log(error);
  }
}

getAllData();
```
