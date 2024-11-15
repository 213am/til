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
