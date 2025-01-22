type Person = {
  name: string;
  age: number;
};

function func(value: string | number | Date | null | Person) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else if (typeof value === "number") {
    value.toFixed(2);
  } else if (value instanceof Date) {
    // Date 라는 것을 보장받음
    value.getTime();
    // } else if (value instanceof Person) { // 오류
    // } else if ("age" in value) { // 오류
    // } else if (value && "age" in value) { // 성공
  } else if (value as Person) {
    // 성공
    // 오류
    console.log((value as Person).age);
  }
}
