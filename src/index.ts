// 아래 상황은 Person 인터페이스는 하나로 합쳐진다.
interface Person {
  name: string;
}
interface Person {
  name: string;
  age: number;
}
interface Male extends Person {
  name: "MALE";
}
const who: Male = {
  name: "홍", // 오류 발생
  age: 10,
};
