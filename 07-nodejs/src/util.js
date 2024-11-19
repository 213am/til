export function say() {
  console.log("안녕하세요");
}
export default function hi() {
  console.log("반가워요");
}
export function smile() {
  console.log("웃어요");
}
export function yok() {
  console.log("sakdfasndg");
}
// ES6 module 에서 외부에 함수를 전달
export { say, smile };
