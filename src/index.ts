type Person = { name: string };
type Employee = { company: string };
type Sample = Person & Employee;

// 속성이 한개만 누락되어도 오류.
const whoA: Sample = { name: "hong" }; // 오류
const whoB: Sample = { company: "green" }; // 오류

// Sample 타입은, Person 과 Employee를 모두 만족하는 타입이다.
const whoC: Sample = { company: "green", name: "hong" }; // 정상
