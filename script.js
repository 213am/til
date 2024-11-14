console.log("글로벌 this: ", this);

const go = () => {
  console.log("화살표 this: ", this);
};
go();

function hi() {
  console.log("일반함수 this: ", this);
}
hi();
