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
