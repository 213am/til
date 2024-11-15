function run(함수) {
  함수();
}
/////////////////////////////////////
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
/////////////////////////////////////
function say() {
  console.log("say");
}
function cry() {
  console.log("ㅠㅠ");
}

run(() => {
  console.log("say");
});
run(() => {
  console.log("cry");
});
