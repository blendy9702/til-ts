# Primitive (기본데이터 형)

- js 와 ts 에 모두 있는 데이터 형

```ts
// Primitive (기본데이터 형)
// 6개의 타입 (js 와 ts 공용으로 사용함)
const stringVar: string = "hello";
const numberVar: number = 123;
const boolVar: boolean = true;
const nullVar: null = null;
const undefinedVar: undefined = undefined;
const symbolVar: Symbol = Symbol("hello");
// const bigIntVar: bigint = BigInt(99999999);
```

- ts 에만 존재하는 타입
- any 와 unknown 은 아무 값이나 할당할 수 있다.
- any 는 어느 곳에서나 값을 할당할 수 있고,
- `unknown 은 아무곳에서도 값을 할당할 수 없다.`

```ts
// any 는 아무 타입이나 할당할 수 있습니다.
// type 체크 안합니다.
// 과도하게 사용하시면 곤란합니다.
let anyVar: any;
anyVar = stringVar;
anyVar = numberVar;
anyVar = boolVar;
anyVar = nullVar;
anyVar = undefinedVar;
anyVar = symbolVar;

// any 라는 타입을 string 에 대입함.
let newStringVar: string = anyVar; // OK
let newNumberVar: number = anyVar; // OK

// unknown - 타입을 알수 없다.
let unknownVar: unknown;
unknownVar = stringVar;
unknownVar = numberVar;
unknownVar = boolVar;
unknownVar = nullVar;
unknownVar = undefinedVar;
unknownVar = symbolVar;

// unknown 라는 타입을 string 에 대입함.
let newStringVar2: string = unknownVar; // Error
let newNumberVar2: number = unknownVar; // Error

// any 와 unknown 은 값을 대입할 때 다르다.
```

# Object (배열, 객체)

## 배열 : 리스트 (list, array)

```ts
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const booleanArr: boolean[] = [true, false];
const stringNumberArr: (string | number)[] = ["a", 1, "b", 5];
const stringNumberBoolenaArr: (string | number | boolean)[] = ["a", 1, true, "b", 5];
// 제네릭 이용한다면?
const numberArrG: Array<number> = [1, 2, 3];
const stringArrG: Array<string> = ["a", "b", "c"];
const booleanArrG: Array<boolean> = [true, false];
const stringNumberArrG: Array<string | number> = ["a", 1, "b", 5];
const stringNumberBoolenaArrG: Array<string | number | boolean> = ["a", 1, true, "b", 5];
```

## 오브젝트

```ts
const obj: object = {};
const personObject: { name: string; age: number } = { name: "홍", age: 10 };
```

# type

- 개발자가 이름을 만들어서 정의하는 데이터타입
- ts에 만 존재

```ts
/**
 * type
 */
type StringType = string;
const stringT: StringType = "Hello";

type NumberType = number;
const numberT: NumberType = 100;

type NullType = null;
const nullT: NullType = null;

// 유니온을 이용한다면?
type StringNumberType = string | number;
let stringNumberType: StringNumberType = 1;
stringNumberType = "Hello";
// stringNumberType = false; // 오류 발생

type GenderType = "male" | "female";
let genderType: GenderType = "female";
genderType = "male";
// genderType = "제3의"; // 오류발생

// 객체를 타입으로 만들기
type TidolType = { name: string; age: number };
```

# interface

- 개발자가 만드는 객체 모양의 데이터 타입

```ts
/**
 * interface
 * type 은 기본형 데이터를 사용가능하지만
 * interface 는 무조건 객체리터럴 형이어야 한다.
 */
type TidolType = { name: string; age: number };
interface IidolType {
  name: string;
  age: number;
}
// 현재까지는 type 과 interface 는 차이가 없다.
// 차이점은 = 을 사용하는가 아닌가라는 문법

const bts: { name: string; age: number } = { name: "BTS", age: 10 };
const iu: { name: string; age: number } = { name: "아이유", age: 30 };
const blankPink: { name: string; age: number } = { name: "블랙핑크", age: 25 };

// 타입

const bts1: TidolType = { name: "BTS", age: 10 };
const iu1: TidolType = { name: "아이유", age: 30 };
const blankPink1: TidolType = { name: "블랙핑크", age: 25 };

// 인터페이스
const bts2: IidolType = { name: "BTS", age: 10 };
const iu2: IidolType = { name: "아이유", age: 30 };
const blankPink2: IidolType = { name: "블랙핑크", age: 25 };

// 객체 속성의 옵션 ?을 살펴보자.
type OptionalIdol_Type = {
  name: string;
  age: number;
  year?: number;
};

interface OptionalIdol_Interface {
  name: string;
  age: number;
  year?: number;
}

const iuT: OptionalIdol_Type = { name: "아이유", age: 30 };
iuT.year = 100; // 좋지 않아요.
const btsI: OptionalIdol_Interface = { name: "BTS", age: 35 };
btsI.year = 2025; // 좋지 않아요.
```

- type 과는 다르게 interafce 는 무조건 객체 리터럴 타입 만 들어감
- interface 는 Primitive 를 할당할 수 없다.

# Enum

- 여러 개의 상수를 정의하고 사용할때 편리
- 외부 연동시 활용 추천

```ts
// 외부 연결 상태
function runNetwork() {
  let status: string = "INITIAL";
  try {
    status = "LOADING";
    // 중간 처리...
    status = "DONE";
  } catch (error) {
    status = "ERROR";
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === "DONE") {
  console.log("성공");
} else {
  console.log("실패");
}

// 오타 발생 위험 회피
const initState = "INITIAL";
const loadingState = "LOADING";
const doneState = "DONE";
const errorState = "ERROR";
// 외부 연결 상태
function runNetwork2() {
  let status: string = initState;
  try {
    status = loadingState;
    // 중간 처리...
    status = doneState;
  } catch (error) {
    status = errorState;
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === doneState) {
  console.log("성공");
} else {
  console.log("실패");
}

// enum 을 이용한 상수로 처리
// 관례상 속성은 대문자를 사용함.
enum Status {
  INITIAL = "init", // 기본값 0
  LOADING = "loading",
  DONE = "done",
  ERROR = "error",
}
// 외부 연결 상태
function runNetwork3() {
  let status: string = Status.INITIAL;
  try {
    status = Status.LOADING;
    // 중간 처리...
    status = Status.DONE;
  } catch (error) {
    status = Status.ERROR;
  } finally {
    return status;
  }
}
// 오타 발생 위험
if (runNetwork() === Status.DONE) {
  console.log("성공");
} else {
  console.log("실패");
}
```

# 타입 추론

- 타입 어노테이션 없이 타입 추론

```ts
/**
 * Type Inference (타입추론)
 */

// let str: string
let str = "hello";
// let num: number
let num = 100;

// const strConst: "hello"
const strConst = "hello";
// const numConst: 100
const numConst = 100;

// let bts: {  name: string;  age: number;}
let bts = {
  name: "bts",
  age: 30,
};
bts.name = "비티에스";
// const iu: {  name: string;  age: number; }
const iu = {
  name: "아이유",
  age: 30,
};
iu.name = "iu";

// 객체를 const 화 하자.
// const blackPink: {   readonly name: "블랙핑크";  readonly age: 30; }
const blackPink = { name: "블랙핑크", age: 30 } as const;
// blackPink.name = "HAHA"; // 읽기 전용 오류
```

```ts
/**
 * Type Inference (타입추론)
 */
// Array
// let numberArr: number[]
let numberArr = [1, 2, 3];
numberArr[0] = 100; // 가능함
numberArr.push(2500); // 가능함
// numberArr.push("300"); // 타입오류

// let numberOrStringArr: (string | number)[]
let numberOrStringArr = [1, "2", 3, "4"];
numberOrStringArr[0] = "안녕하세요."; // 가능함
numberOrStringArr.push("반가워요"); // 가능함
// numberOrStringArr.push(false); // 타입오류

// Tuple
// 배열의 요소의 개수와 각 요소의 데이터 타입 미리 정의
// type const = readonly [1, 2]
const towNumberArr = [1, 2] as const;
// towNumberArr.push(5); // 오류
// towNumberArr[500] = 100; // 오류

// let towNumberArr2: readonly [1, 2]
let towNumberArr2 = [1, 2] as const;
// towNumberArr2[0] = 100; // 오류
```

# Casting (캐스팅)

- 타입 추론을 조금더 개발자가 구체화하는 것.
- 특정 타입으로 지정하는 것.
- js 에서는 없는 개념(ts 에만 존재)
- as 는 타입을 강제로 변환하는데 정말 조심하자.
- ts 에서는 오류가 아닌데, 런타임에서는 오류발생 가능성

```ts
/**
 * Casting (캐스팅)
 */
const numberVar = 20;
// const numberVar: 20 으로 추론
// 아래는 `문자열`을 대문자로 모두 고치기 함수
// numberVar.toUpperCase();  // 오류

const sampleNumber: any = 5;
// ts 에서 타입체크 못하고 런타임에 오류가 발생함.
sampleNumber.toUpperCase(); // 런타임 오류

let count = 20;

// 무수한 코드 진행 후  필요에 의해서 아래 코드 진행
// 아래 코드는 개발자가 이건 반드시 string 이니까 믿어줘.
// let num: string
let num = count as unknown as string;
// 오류는 해결했지만, 런타임에는 오류가 발생합니다.
num.toUpperCase(); //  대문자로 고치기
```

# Union 기초

- 타입들을 합칠(병합) 수 있는 여러 방법 중 하나이다.

```ts
/**
 * Union 기본
 */
type StringOrBool = string | boolean;
let sb: StringOrBool = "안녕";
sb = false;

type StringOrBoolOrNull = string | boolean | null;
let sbn: StringOrBoolOrNull = "안녕";
sbn = false;
sbn = null;

type StateType = "LOADING" | "DONE" | "ERROR" | "INIT";
let state: StateType = "DONE";
// state = "GO"; // 타입오류

// 배열(리스트)의 Union
type StringArrOrBoolArr = string[] | boolean[];
let saoba: StringArrOrBoolArr = ["아이유", "블랙핑크"];
saoba = [true, false, false];
// saoba = ["아이유", false]; // 타입 오류

type StringBoolArr = (string | boolean)[];
let sba: StringBoolArr = ["아이유", false];

// 인터페이스 Union
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}
type AnimalOrHuman = Animal | Human;
let aoh: AnimalOrHuman = { name: "아이유", age: 30, address: "서울" };

// let aoh: Human
aoh;
// (property) Human.address: string
aoh.address;
// (property) Human.name: string
aoh.name;
// (property) Human.number: string
aoh.age;

aoh = { name: "댕댕이", age: 5 };
// let aoh: Animal
aoh;
aoh.age;
aoh.name;
// 'Animal' 형식에 'address' 속성이 없습니다
// aoh.address; // 오류
// (aoh as Human).address // 런타임 오류발생함. 반드시 확인을 하는 것을 추천

// 위의 내용과는 완전 다르게 겹치는 속성이 없는 경우
// 위에서는 name 과  age 가 겹쳐 있었다.
type Person = {
  name: string;
  age: number;
};
type Cat = {
  breed: string;
  country: string;
};
type PersonOrCat = Person | Cat;

let iu: PersonOrCat = {
  name: "아이유",
  age: 30,
};

let cat: PersonOrCat = {
  breed: "스핑크스",
  country: "이집트",
};
let who: PersonOrCat = {
  name: "아이유",
  age: 30,
  breed: "스핑크스",
  country: "이집트",
};
let who2: PersonOrCat = {
  name: "아이유",
  age: 30,
  // breed: "스핑크스",
  // country: "이집트",
};
let who3: PersonOrCat = {
  // name: "아이유",
  // age: 30,
  breed: "스핑크스",
  country: "이집트",
};

let who4: PersonOrCat = {
  name: "아이유",
  // age: 30,
  breed: "스핑크스",
  country: "이집트",
};

let who5: PersonOrCat = {
  // name: "아이유",
  age: 30,
  breed: "스핑크스",
  country: "이집트",
};

let who6: PersonOrCat = {
  name: "아이유",
  age: 30,
  // breed: "스핑크스",
  country: "이집트",
};

let who7: PersonOrCat = {
  name: "아이유",
  age: 30,
  breed: "스핑크스",
  // country: "이집트",
};

// 아래는 오류가 발생한다.
// 어떤 타입이라도 필수 요소가 반드시 충족되고 추가되는 것은 상관없다.

// 어떤 타입에도 필수 요소가 충족되지 않으면 오류가 발생한다.
let who8: PersonOrCat = {
  name: "아이유",
  // age: 30,
  // breed: "스핑크스",
  country: "이집트",
};
```

# Intersection Type

- 타입을 합칠때 모든 타입을 만족하는 타입

```ts
/**
 * Intersection Type
 * Union 은 하나는 만족해야 돼, 즉 Or 의 조건
 * Intersectin 은 모두 만족해야 돼. 즉 And 의 조건
 */

// Interface
interface Human {
  name: string;
  age: number;
}
interface Contact {
  phone: string;
  address: string;
}

type HumanAndContact = Human & Contact;
let iu: HumanAndContact = {
  name: "아이유",
  age: 30,
  address: "서울",
  phone: "000",
};

// 예외사항 (기본형에서는 관례상 사용하지 않는다.)
// 절대로 존재할수 없다는 표현이 never
// type StringAndNumber = never
type StringAndNumber = string & number;
// let iu2:StringAndNumber = never; 오류
```

# Narrowing (타입 좁히기)

- Union 을 이용해서 만들어진 타입에 구체적인 타입으로 변환

```ts
/**
 * Narrowing
 */
let numberOrString: number | string;
// let numberOrString: string | number
numberOrString = "아이유";

// 타입 좁히기 가 일어났다.
// let numberOrString: string
numberOrString;

// 특정 값을 할당해서 타입 좁히기
let numberOrString2: number | string = "아이유";
// let numberOrString2: string
numberOrString2;

// typeof 연산자를 사용해서 타입 좁히기
// js 가 런타임 중에 값이 결정되는 상황을 만들어 봄
let numberOrString3: number | string = Math.random() > 0.5 ? 123 : "아이유";

if (typeof numberOrString3 === "string") {
  // let numberOrString3: string
  numberOrString3;
} else {
  // let numberOrString3: number
  numberOrString3;
}

// 조건문에서 특정 값을 할당해서 타입 좁히기
let nullOrString4: null | string[] = Math.random() > 0.5 ? null : ["아이유", "블랙핑크"];

if (nullOrString4) {
  // let nullOrString4: string[]
  nullOrString4;
} else {
  // let nullOrString4: null
  nullOrString4;
}

// 비교문을 이용해서 타입 좁히기
// JS 에서는 불가능하지만 TS 에서는 타입 비교를 사용할 수 있다.
let numberOrString5: number | string = Math.random() > 0.5 ? 123 : "아이유";
let stringOrBool: string | boolean = Math.random() > 0.5 ? "아이유" : true;

if (numberOrString5 === stringOrBool) {
  // let numberOrString5: string
  numberOrString5;
  // let stringOrBool: string
  stringOrBool;
} else {
  // let numberOrString5: string | number
  numberOrString5;
  // let stringOrBool: string | true
  stringOrBool;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 123 : Math.random() > 0.5 ? "아이유" : null;
if (typeof numberOrStringOrNull === "number") {
  // let numberOrStringOrNull: number
  numberOrStringOrNull;
} else {
  // let numberOrStringOrNull: string | null
  numberOrStringOrNull;
}

// in 연산자로 타입 좁히기
interface Human {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  type: string;
}
let human: Human = { name: "아이유", age: 30 };
let dog: Dog = { name: "뽀삐", type: "강아지" };

let humanOrdog: Human | Dog = Math.random() > 0.5 ? human : dog;
if ("age" in humanOrdog) {
  // let humanOrdog: Human
  humanOrdog;
} else {
  // let humanOrdog: Dog
  humanOrdog;
}

// instanceof 연산자로 타입 좁히기
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : "아이유";
if (dateOrString instanceof Date) {
  // let dateOrString: Date
  dateOrString;
} else {
  // let dateOrString: string
  dateOrString;
}

// Discriminated Union
// 특정 속성에 상수로 문자열을 배치해서 비교하여 타입 좁히기
interface Animal {
  type: "dog" | "human";
  height?: number;
  breed?: string;
}
let animal: Animal = Math.random() > 0.5 ? { type: "human", height: 180 } : { type: "dog", breed: "스핑크스" };
if (animal.type === "human") {
  animal.height;
} else {
  animal.breed;
}
// 위의 사항은 정확한 타입을 좁혀준 상황이 아니다.
interface Human2 {
  type: "human";
  height: number;
}
interface Dog2 {
  type: "dog";
  breed: string;
}
type HumanOrDog2 = Human2 | Dog2;
let animal2: HumanOrDog2 = Math.random() > 0.5 ? { type: "human", height: 180 } : { type: "dog", breed: "스핑크스" };
if (animal2.type === "human") {
  // let animal2: Human2
  animal2;
} else {
  // let animal2: Dog2
  animal2;
}
switch (animal2.type) {
  case "human":
    // let animal2: Human2
    animal2;
    break;
  case "dog":
    // let animal2: Dog2
    animal2;
    break;
}
```

# 함수

```ts
/**
 * 함수
 */
// 기본적으로 함수 파라메터는 any 로 생각합니다.
// 가능 하면 배제하고, 그래도 모르겠으면
// 차라리 unknown 주고 타입 좁히기 (Narrowing) 하는 걸 추천
function showName(name: any) {
  console.log(name);
}

function showName2(name: string) {
  console.log(name);
}

// 옵션 파라메터
function showMember(name: string, age?: number) {
  console.log(name, age);
}
showMember("홍", 12);
showMember("홍");

// Rest 파라메터
// ...rest 는 배열타입이다.
function showInfo(...args: string[]) {
  console.log(args);
}

function showInfo2(age: number = 0, ...args: string[]) {
  console.log(args);
}

// 함수의 리턴타입

// function add(a: number, b: number): number   추론됨
function add(a: number, b: number) {
  return a + b;
}
function add2(a: number, b: number): number {
  return a + b;
}

// function ran(): "아이유" | 123   추론
function ran() {
  return Math.random() > 0.5 ? "아이유" : 123;
}
function ran2(): "아이유" | 123 {
  return Math.random() > 0.5 ? "아이유" : 123;
}

// void 반환타입
// 아무것도 돌려주지 않아요.
function notReturn(): void {
  //  ...
}

// never 반환타입
// 존재할 수 없다.
function throwError(): never {
  throw new Error("내가 던지는 에러");
}
// 무한반복 절대로 결과값 안나오는 케이스
function loop(): never {
  while (true) {
    // 실행
  }
}
```

# 함수 시그니처로 타입선언

- 시그니처란? 선언 구조

```ts
/**
 * 함수 시그니처로 타입 구성
 */

// type 으로 함수의 타입 정의하기
const runner = () => {
  return ["아이유", "블랙핑크"].map((x) => x);
};

type Mapper = (x: string) => string;

const runner2 = (callback: Mapper) => {
  return ["아이유", "블랙핑크"].map(callback);
};

runner2((x) => `${x} 입니다`);

type TwoMembers = (a: number, b: number) => number;

// const twoFun: (a: number, b: number) => number
const twoFun = (a: number, b: number): number => a + b;
const twoFunT: TwoMembers = (a, b) => a + b;

const add = (a: number, b: number): number => a + b;
const minus = (a: number, b: number): number => a - b;
const multi = (a: number, b: number): number => a * b;
const divide = (a: number, b: number): number => a / b;

const add2: TwoMembers = (a, b) => a + b;
const minus2: TwoMembers = (a, b) => a - b;
const multi2: TwoMembers = (a, b) => a * b;
const divide2: TwoMembers = (a, b) => a / b;

// interface 로 함수의 타입 정의하기
interface ITwo {
  // 키명 : 키값
  (a: number, b: number): number;
}

const add3: ITwo = (a, b) => a + b;
const minus3: ITwo = (a, b) => a - b;
const multi3: ITwo = (a, b) => a * b;
const divide3: ITwo = (a, b) => a / b;
```

# 함수 오버로딩
