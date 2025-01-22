# 타입 단언(Type Assertion)

- `이제부터 타입스크립트 타입은 내가 정한다`
- 개발자가 타입을 보증하니까 검사 ㄴㄴ
- 컴파일러 속이는 과정

```ts
type Person = { name: string; age: number };

// 아래는 타입추론에서 : {} 어노테이션으로 판단
// 프로퍼티 name, age가 없으므로 오류
let who = {};
who.name = "hong";
who.age = 100;

// 필수 프로퍼티가 할당 안됨.
let who2: { name: string; age: number } = {};

// 옵션은 개발자의 의도가 아닌 회피 방법
let who3: { name?: string; age?: number } = {};

// 최종 책임을 개발자가 지겠다. 타입 검사 취소
let who4 = {} as Person;
who4.name = "hong";
who4.age = 12;
// who4.go = 100; // 잘 체크한다.
```

## 1. any 타입을 명확한 타입으로 단언

```ts
let value: any = "hello";
let count: number = (value as string).length;
```

## 2. DOM 을 활용할 때

```ts
const root = document.getElementById("root") as HTMLElement;
const inputTag = document.querySelector("input");
(inputTag as HTMLInputElement).value = "hi";
```

## 3. 유니온 타입중 하나를 지정하기

```ts
type User = { name: string };
type Admin = { name: string; admin: boolean };
let person: User | Admin = { name: "hong", admin: true };
console.log((person as Admin).name);
```

## 4. Null 이 아닌 값으로 단언

- 이거 절대 null 아니라고 개발자가 알려줌

```ts
let tag = document.querySelector("div");
// 절대 null 아니라고 알려주기
(tag as HTMLDivElement).innerHTML = "hello, world";
```

## 5. const 단언

- 아주 편리하게 사용 가능.

```ts
let num = 10 as const;

// as const 활용시 readonly 가 셋팅되서 변경 불가
let animal = {
  name: "cat",
  age: 10,
} as const;
animal.age = 10;

// 아래처럼 된다
let animal2: {
  readonly name: "cat";
  readonly age: 10;
};
```

## 6. 타입 좁히기(Type Narrowing) 함께 활용

```ts
function show(value: string | number) {
  // 타입 좁히기
  if (typeof value === "string") {
    console.log((value as string).toUpperCase());
  } else {
    console.log((value as number).toFixed(2));
  }
}
```

## 7. 타입단언 사용시 주의 유형.

- 모든 타입을 타입 단언으로 해결되지는 않는다.
- 수퍼타입과 서브타입을 고민해야 한다.

```ts
let num: number = 10 as never;
// 10 은 number 이고 never 는 모든 타입의 서브타입
// 10 은 수퍼타입이므로 단언이 가능하다.

let num2 = 10 as unknown;
// 10 은 number 이고 unknown 은 최상위 수퍼타입
// 10 은 unknown 의 서브 타입이므로 단언이 가능

let num3 = 10 as string;
// 10 은 number 이고 string 은 number 수퍼, 서브 타입이 아니므로 단언이 불가능

// 아래는 좋지 않다
let num4 = 10 as unknown as string;
```
