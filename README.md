# tsconfig.json 의 셋팅은 회사기준 별도

# package.json : npm 명세서

# 타입스크립트란?

- `변수, 매개변수, 함수리턴값의 타입(데이터 종류)를 작성`해주는 것

## 어노테이션(Annotation)

- 주석, 부가정보
- 코드 설명과 추가적인 정보를 제공하는 것을 말함.

### typescript 어노테이션

```ts
const 변수명 : 데이터 타입;
function 함수명(매개변수 : 데이터타입) : 리턴타입 {}
```

### 메타데이터 어노테이션

- 일반적인 자바스크립트와 달리 Node.js 또는 Spring 에서 자주 본다.
- @기호를 어노테이션 이라고 한다.
- @추가적인 정보를 제공하는 기능도 부여한다.

```java
@Annotation
@Entity
@Table(name = "테이블명")
public void 함수명() {}
```

## ts 어노테이션을 이용한 기본 데이터(Primitive) 종류 명시

### 1. 변수 어노테이션

- `const 변수명 : 데이터종류 = 값;`

```ts
let num: number = 1;
let num1: number = 1.5;
let num2: number = 0x10;
let num3: number = Infinity;
let num4: number = -Infinity;
let str: string = "안녕";
let bool: boolean = true;
let un: undefined = undefined;
let nu: null = null;

let hi: "안녕" = "안녕";
hi = "반가워"; // 오류

const age: 5 = 10;
```

### 2. 타입추론을 확인하고 잘못된 추론이면 직접 관여한다.

- 일단 타입추론을 적극적으로 반영한다.
- 필요시에 어노테이션을 변경한다.

```ts
let num: number | string = 1;
const go = "안녕";
num = "hello";
```

### 3. ts의 데이터 종류

- unknown
- any
- null
- void
- undefined
- never
- number
- Number Enum
- bigint
- string
- String Enum
- symbol
- unique symbol
- object
- array
- tuple
- function
- constructor

## 객체 중 배열과 튜플

### 1. 배열

- 배열을 만드는 법 1.

```ts
const arr = [1, 2, 3];
console.log(arr);
```

- 배열을 만드는 법 2. (어노테이션 정의하기)

```ts
const arr2: number[] = [1, 2, 3];
```

- 배열을 만드는 법3.

```ts
const arr3: Array<number> = [1, 2, 3];
```

```ts
// 배열
const arr = [1, 2, 3];
const arr2: number[] = [1, 2, 3];
// 제네릭 이라는 문법 활용시 <데이터종류>
const arr3: Array<number | string> = [1, 2, 3];

arr3[0] = "반가워"; // 오류

// 배열
const arr4 = ["안녕", "반가워"];
const arr5: string[] = ["안녕", "반가워"];
// 제네릭 이라는 문법 활용시 <데이터종류>
const arr6: Array<number | string> = ["안녕", "반가워"];
arr6[1] = 5000; // 오류

// 배열
const arr7 = [1000, "사과"];
const arr8: (number | string)[] = [1000, "사과"];
const arr9: Array<number | string | boolean> = [1000, "사과"];

arr9[1] = false; // 요로 타입 오류

// 객체 리터럴 배열
const todos = [
  { id: 1, title: "안녕", completed: false },
  { id: 2, title: "리액트", completed: true },
  { id: 3, title: "타입스크립트", completed: false },
];
const todos2: {
  id: number;
  title: string;
  completed: boolean;
}[] = [
  { id: 1, title: "안녕", completed: false },
  { id: 2, title: "리액트", completed: true },
  { id: 3, title: "타입스크립트", completed: false },
];

const todos3: Array<{
  id: number;
  title: string;
  completed: boolean;
}> = [
  { id: 1, title: "안녕", completed: false },
  { id: 2, title: "리액트", completed: true },
  { id: 3, title: "타입스크립트", completed: false },
];
```

### 2. 튜플

- Tuple 은 ts에만 있다.
- Tuple 은 배열의 어노테이션이다.
- Tuple 은 배열의 길이와 데이터 종류를 고정해 버림.
- Tuple 은 배열의 요소를 추가, 삭제 못함.

```ts
// 튜플
let arr: [number, number, number | string] = [1, 2, 3, 4];
arr = [4, 5, 6];
arr = [4, 5, 6, 7]; // 길이 오류
arr.push(7); // 메서드
arr.push(7);
arr = [1, 3, "안녕"]; // 타입 오류

const arr2: [number, number, number] = [1, 2, 3];
// 제네릭 이라는 문법 활용시 <데이터종류>
const arr3: [number | string, number, number] = [1, 2, 3];

arr3[0] = "반가워"; // 오류

// 배열
const arr4: [string, string] = ["안녕", "반가워"];
const arr5: [string, string] = ["안녕", "반가워"];
// 제네릭 이라는 문법 활용시 <데이터종류>
const arr6: [string, string] = ["안녕", "반가워"];
arr6[1] = 5000; // 오류

// 배열
const arr7: [number, string] = [1000, "사과"];
const arr8: [number, string] = [1000, "사과"];
const arr9: [number, string] = [1000, "사과"];

arr9[1] = false; // 요로 타입 오류

// 객체 리터럴 배열
const todos: [
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean }
] = [
  { id: 1, title: "안녕", completed: false },
  { id: 2, title: "리액트", completed: true },
  { id: 3, title: "타입스크립트", completed: false },
];
const todos2: [
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean }
] = [
  { id: 1, title: "안녕", completed: false },
  { id: 2, title: "리액트", completed: true },
  { id: 3, title: "타입스크립트", completed: false },
];

const todos3: [
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean },
  { id: number; title: string; completed: boolean }
] = [
  { id: 1, title: "안녕", completed: false },
  { id: 2, title: "리액트", completed: true },
  { id: 3, title: "타입스크립트", completed: false },
];
```

### 3. 배열과 튜플의 메소드는 동일함.

- 어차피 배열이다.
- pop, push 는 정상 작동 되어버린다.
- 그래서 튜플을 안쓰게 된다. (튜플 사용경험이 적어짐)

## 객체 리터럴

```ts
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
```

## 타입 별칭

- 기존의 데이터 종류에 `새로운 이름으로 타입을 만드는 분법`
- 작성법은 `type PascalCase = 데이터형` 로 선언.

```ts
export type Member = {
  id: number;
  name: string;
  age: number;
  email: string;
  role: string;
  isAdmin: boolean;
  createAt: string;
  phone?: string;
};
const user_hong: Member = {
  id: 1,
  name: "홍길동",
  age: 10,
  email: "a@a.com",
  role: "guest",
  isAdmin: false,
  createAt: "2024-12-24",
};
user_hong.phone = "010-1234-5678";
const user_park: Member = {
  id: 1,
  name: "파크",
  age: 100,
  email: "b@a.com",
  role: "member",
  isAdmin: false,
  createAt: "2021-12-24",
};
```

### 1. 타입 별칭 주의사항

- 타임 별칭 주의사항으로 동일한 이름의 type을 재정의할 수 없다.

```ts
type User = {};
// 아래처럼 재정의하면 오류 발생
type User = {};
```

- 인덱스 시그니처의 이해

```ts
type City = {
  daegu: string;
  busan: string;
  zezu: string;
  seoul: string;
};

type Cities = {
  [key: string]: string;
};

const city: Cities = {
  daegu: "대구",
  busan: "부산",
  zezu: "제주",
  seoul: "서울",
};

type AreaNum = {
  daegu: number;
  busan: number;
  seoul: number;
};
// 인덱스 시그니처로 변경
type AreaNumbers = {
  [key: string]: number;
};

const areaNumber: AreaNumbers = {
  daegu: 53,
  busan: 51,
  seoul: 2,
};
```

### type 의 내용 정리

- `/src/types 폴더` 를 통상 생성합니다.
- 폴더내에 type 만 정의한 ts 파일들이 다수 존재한다.

```ts
export type Todo = {
  id: number;
  title: string;
  content: string;
  completed: boolean;
  date: Date;
};
export type User = {
  nickName: string;
  role: string;
  follow: string[];
};
export type Cart = {
  goodId: string[];
  total: number;
  count: number;
};
```

## Enum

- `/src/contants 폴더` 생성
- 프로젝트 내에서 공통으로 사용하는 변수들 관련 문서
  : colors.ts, values.ts, country.ts ...

```ts
// 회원의 등급을 설정하려고 한다.
// 3은 관리자, 2는 사장님, 1은 회원, 0은 방문객
// "admin" : 관리자
// "owner": 사장님
// "member": 회원
// "guest": 방문객

const Admin = 3;
const Owner = 2;
const Member = 1;
const Guest = 0;

const user_Go = {
  nickName: "고길동",
  role: Admin,
};

const user_park = {
  nickName: "둘리",
  role: Owner,
};
// 위의 상수 정의는 관리가 모호하다 라고 판단된다.
// 주석을 보지 않으면 의미가 모호하다.

// enum 을 도입해서 상수를 묶어 관리해보자.
// 같은 용도를 모아서 상수의 집합을 만들어서 활용해보자.
// 특정한 값이 없으면 0부터 대입 후 증가
enum MemberRole {
  Admin,
  Owner,
  Member,
  Guest,
}

const user_go = {
  nickName: "고길동",
  role: MemberRole.Guest,
};

// enum 을 이용해서 다국어 서비스를 관리해보자.
enum Language {
  KOREAN = "ko",
  ENGLISH = "en",
  CHINESE = "cn",
  JAPANESE = "ja",
}

const user_jone = {
  nickName: "존",
  role: MemberRole.Guest,
  language: Language.ENGLISH,
};
```

## any

- ts 안쓰려고 즉, `어노테이션 안함`을 선언.
- 가능하면 any 를 안쓰려고 노력하자.
- js 버전을 마이그레이션 하는 경우
- 해결이 안되는 경우 어노테이션을 회피 용도

```ts
let age: any = 15;
age = 100;
age = "안녕";
```

## unknown

- any와 흡사함. 하지만 큰 차이가 있다.
- 타입을 `if 문`과 `typeof` 로 좁혀가면서 검사를 해야 함.
  : 타입 좁히기, 타입가드

- `타입 단언`(type assertion)
  : `맞으니까 믿어라` 라고 알려주는 문법

```ts
let age: unknown = "hello";
if (typeof age === "string") {
  console.log(age.toUpperCase());
}
console.log((age as string).toUpperCase());
```

## any 와 unknown 차이를 확실히 구분해 봐요.

```ts
// any 와 unknown 의 차이를 이해하자.
// js 데이터처리와 가장 흡사
let anything: any = "Hello, world";
anything = 123;
anything.toUpperCase(); // 오류 문자 적용
anything.toFixed(2); // 숫자 적용

let anythingUn: unknown = "Hello, world";
anythingUn = 123;
// any 보다는 unknow을 사용하세요.
// 단 타입을 검사하는 조건을 넣어서 안전하게 사용하세요.
if (typeof anythingUn === "string") {
  anythingUn.toUpperCase(); // 오류 문자 적용
}
if (typeof anythingUn === "number") {
  anythingUn.toFixed(2); // 숫자 적용
}
```

```ts
// 변수 타입
// 매개 변수 타입 (학습 안함)
// 함수 리턴 타입 (학습 안함)
function processAny(word: any) {
  console.log(word.toUpperCase());
}
processAny("hello");
processAny(123);

function processUnknown(word: unknown) {
  // unkonw 은 type guard 를 활용하라.
  //  타입 좁히기
  if (typeof word === "string") {
    console.log(word.toUpperCase());
  } else {
    console.log("글자를 전달하세요.");
  }
}
processUnknown("hello");
processUnknown(123);
```

```ts
function processAny(person: any) {
  console.log(person.nickName.toUpperCase());
}
processAny({ nickName: "홍", age: 10 });
processAny({ age: 10 });

function processUnknown(person: unknown) {
  // unkonw 은 type guard 를 활용하라.
  //  타입 좁히기
  if (
    typeof person === "object" && // person이 객체인지 확인
    person !== null && // null인지 확인
    "nickName" in person && // nickName 속성이 있는지 확인
    typeof person.nickName === "string" // nickName이 문자열인지 확인
  ) {
    console.log(person.nickName.toUpperCase());
  } else {
    console.log("nickName 속성이 없거나 유효하지 않습니다.");
  }

  if (
    typeof person === "object" && // person이 객체인지 확인
    person !== null && // null인지 확인
    "age" in person && // nickName 속성이 있는지 확인
    typeof person.age === "number" // nickName이 문자열인지 확인
  ) {
    console.log(person.age.toFixed(2));
  } else {
    console.log("age 속성이 없거나 유효하지 않습니다.");
  }
}
processUnknown({ nickName: "홍", age: 10 });
processUnknown({ age: 10 });
```

```ts
function processAny(person: any) {
  console.log(person[0].toUpperCase());
}
processAny(["hong", "doori"]);
processAny([123, 456]);

function processUnknown(person: unknown) {
  if (Array.isArray(person) && typeof person[0] === "string") {
    console.log(person[0].toUpperCase());
  } else {
    console.log("잘못된 배열입니다.");
  }
}
processAny(["hong", "doori"]);
processAny([123, 456]);
```

## never

- "절대로 일어나면 안된다" 라는 표현. (불가능한 상황)
- "절대로 끝나지 않는다." 라는 표현. (한무루프)
- 절대 발생하지 안는 상태를 표현할 때
- 끝나지 던지는 함수 않는 함수
- 불가능한 상태 처리 등에 활용
- 타입 안정성을 높이고, 예외처리를 명확하게 해줌.

```ts
function go(): never {
  while (1) {}
}

function say() {
  throw new Error("error");
}
```

```ts
type Animal = "cat" | "dog" | "bird";
let a: Animal = "cat";
a = "dog";
a = "bird";
a = "hores"; // 에러

// Animal 에 타입으로 정의한 것 외에는 값이 절대 존재하면 안됨
// 위의 문장을 어노테이션으로 타입을 표현 해보자.

function say(who: Animal): string {
  if (who === "cat") {
    return "고양이";
  }
  if (who === "dog") {
    return "멍머이";
  }
  if (who === "bird") {
    return "새";
  } else {
    // why come in here the code?
    const no: never = who;
    throw new Error(`no type: ${no}`);
  }
}

say("horse"); // 오류가 있어도 js 는 만들어 짐
```

- 아무 값도 반환하지 않아요를 정확히 명시하고 싶은 경우.

```ts
function throwError(message: string): never {
  throw new Error(message);
}

throwError("프로그램 중지");
```

- 무한루프 함수

```ts
function loop(): never {
  while (true) {
    console.log("한무 츠쿠요미");
  }
}

loop();
```

- 언제 사용할까?
  - switch, if~else 등 모든 경우를 처리한 후
  - 항상 에러를 던져야 하는 함수
  - 무한 루프로 절대 종료되지 않는 함수
  - 명확한 코드 흐름 안내

## void

- `아무것도 없다`는 의미
- 주로 함수의 리턴 타입으로 사용

```ts
function func1(): string {
  return "hello";
}
// 함수에서 리턴하는 값의 종류는 비어있어요.
function func2(): void {
  console.log("안녕");
}
// 값이 없다는 표현은 어떤게 있나요?
// 함수 반환 return 이 없으면 기본이 void 입니다.
function func3(): void {}

// 아래 함수는 return undefined 작성
// 명시적으로 undefined 를 리턴해야 한다면 작성해줘야 함.
function func4(): undefined {
  return undefined;
}

// 명시적으로 return 후 값이 없는 함수라면
// void 를 리턴합니다.
function func5(): void {
  return;
}

// 명시적으로 null 을 리턴하고 싶다면
// null 을 리턴해야 한다.
function func6(): null {}
function func7(): null {
  return null;
}
```

- void 를 사용하는 곳
  - 아무것도 반환하지 않을 때
  - 반환값이 필요없는 콜백 함수
  - 비동기 함수에 리턴되는 값이 없음을 나타낼때

```ts
// 비동기 함수
async function fetchGettodo(): Promise<void> {
  const res = await fetch("주소");
}
async function fetchGettodoOne(): Promise<string> {
  const res = await fetch("주소");
  return "hello";
}

async function fetchPostTodo(): Promise<boolean> {
  const res = await fetch("주소");
  return true;
}

type Todo = {
  id: number;
  title: string;
};
async function fetchSortTodo(): Promise<Todo> {
  const res = await fetch("주소");
  return { id: 1, title: "안녕" };
}
```
