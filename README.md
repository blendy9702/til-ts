# 객체 타입 호환성

## 1. object 타입의 호환성

- object 는 모든 객체 타입의 수퍼타입이다.
- object 는 any, unknown 의 서브타입이다.

```ts
let obj: {
  name: string;
} = { name: "hong" };

let obj2: object = { name: "hong" };

let a: any = obj;
let b: unknown = obj2;
```

## 2. Array 타입의 호환성

- Array 는 모든 배열 타입의 수퍼타입이다.
- Array<특정타입> 은 더 구체적인 배열 타입이다.
- Array 는 any, unknown 의 서브타입이다.

```ts
let numArr: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

// Array<any> 는 Array<number>의 수퍼타입이다.
let anyArr: Array<any> = numArr;
let anyArr2: any[] = numArr2;
```

## 3. 유니온 타입의 호환성

- 아래 문장은 기본형 타입의 유니온
- 문자열 또는 숫자형 데이터를 대입할 수 있다.
- 합집합 (서로 연관성이 전혀 없는 데이터 형을 조합한 새로운 타입정의)

```ts
type StringNumber = string | number;
```

- `A | B 는 A 또는 B 를 포함` 하는 `두 타입의 수퍼타입`이다.

```ts
type StringNumber = string | number;

// 문자열은 StringNumber 타입의 서브 타입이므로 업캐스팅됨
let now: StringNumber = "hello";
// 숫자형은 StringNumber 타입의 서브 타입이므로 업캐스팅됨
now = 12;
```

### 3.1. 데이터를 변수에 담아서 `변수로 전달`할 때

- 같은 종류의 데이터라고 인정(객체 타입 호환성)
- `변수로 전달`할 때

```ts
type Animal = {
  name: string;
  age: number;
};

type Cat = {
  name: string;
  age: number;
  color: string;
};
type Sample = Animal | Cat;

const ani: Animal = { name: "hong", age: 21 };
const ani2: Cat = { name: "hong", age: 21, color: "red" };

const ani3: Animal = ani2;
// Animal 타입은 name, age만 있어야 한다.
// 지금 Cat에 color가 존재하는데 타입 안맞는거 아님?
// TS 에서는 객체 값을 입력할때 속성을 비교.
// 프로퍼티 개수가 적은 타입에 프로퍼티 개수가 많은 타입은 업캐스팅.
```

### 3.2. 데이터를 객체리터럴에 담아서 전달할 때

```ts
const gogo: Animal = { age: 12, name: "park", color: "red" };
// color 가 에러난다.
// 리터럴 객체라서 프로퍼티 초과 에러가 발생한다.
```

### 3.3. 데이터를 변수로 담아서 전달.

```ts
const ani: Animal = { name: "hong", age: 21 };
const ani4: Cat = ani; // 오류
// cat의 name, age, color 필수 프로퍼티를 충족하지 못함
```

### 3.4. 유니온(합집합) 샘플

```ts
type Animal = {
  name: string;
  age: number;
};

type Cat = {
  name: string;
  age: number;
  color: string;
};
type Sample = Animal | Cat;

const ani: Animal = { name: "hong", age: 21 };
const ani2: Cat = { name: "hong", age: 21, color: "red" };
const now: Sample = ani;
const now2: Sample = ani2;
const noe3: Sample = { name: "hong", age: 21, color: "yellow" };
// 실제타입은 3가지가 나온다
//  {age: number, name: string}
//  {age: number, name: string, color: string}
//  {age: number, name: string, color: string}
```

## 4. 인터센션(교집합 - Intersection) 타입 (A & B)

- A & B 는 A도 만족하고, B도 만족하는 타입
- A & B 는 A의 서브타입, B의 서브타입.

```ts
type Wow = number & string;
// 서로 교차하는 공통의 데이터 종류가 없으므로
// 결코 존재할 수 없는 타입이므로 never로 된다.
const go: Wow = 1; // 오류
```

```ts
type Person = { name: string };
type Employee = { company: string };
type Sample = Person & Employee;

// 속성이 한개만 누락되어도 오류.
const whoA: Sample = { name: "hong" }; // 오류
const whoB: Sample = { company: "green" }; // 오류

// Sample 타입은, Person 과 Employee를 모두 만족하는 타입이다.
const whoC: Sample = { company: "green", name: "hong" }; // 정상
```
