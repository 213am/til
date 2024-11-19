function say() {
  console.log("안녕하세요");
}
export default function hi() {
  console.log("반가워요");
}
function smile() {
  console.log("웃어요");
}
function yok() {
  console.log("sakdfasndg");
}
// ES6 module 에서 외부에 함수를 전달
export { say, smile };
