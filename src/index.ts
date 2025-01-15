let user: {
  name: string;
  age: number;
} = {
  name: "hong",
  age: 10,
};

let user2: {
  name: string;
  age: number;
} = {
  name: "hong",
  age: 10,
};

// 문제발생
// 옵션을 제공을 하자.
let user3: {
  name: string;
  age: number;
  job?: string; // 옵션 적용
} = {
  name: "hong",
  age: 10,
};
user3.job = "student"; // 오류
// 문제발생
let user4: {
  readonly name: string; // 코딩중변경 금지
  age: number;
} = {
  name: "hong",
  age: 10,
};
user4.name = "Blame"; // 오류
