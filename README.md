# 타입 호환성

- Super Type : 더 많은 값을 포함하는 타입
- Sub Type : 특정 값이나 조건을 가진 타입

## 예

- Aniaml 은 수퍼타입
- Cat 은 서브타입

## 1. any

- 타입스크립트 `최상위 Super Type`
- 어떤 타입이든 any 의 `서브타입`

```ts
let value: any;
// string 은 any 의 서브타입이라 할당가능
value = "hello";
// number 는 any 의 서브타입이라 할당가능
value = "1";
// boolean 은 any 의 서브타입이라 할당가능
value = true;
```

## 2. unknown

- unknown 은 모든 타입의 수퍼타입이다.
- 하지만 반드시 타입체크를 직접해야 한다. (타입가드)
- typeof 등등..

```ts
let value: unknown = "hello";
// string 은 unknown 의 서브타입이라 할당가능
value = "hello";
// number 는 unknown 의 서브타입이라 할당가능
value = "1";
// boolean 은 unknown 의 서브타입이라 할당가능
value = true;

//  담겨진 unknown 을 활용하려면 타입체크 필요
if (typeof value === "string") value.toUpperCase(); // 대문자로 바꾸기
```

- unknown 은 다른 타입의 서브

```ts
// js 를 마이그레이션하면서 any 를 조심하다 보니 unknown 을 사용함.
let value: unknown = "hello";

// 아래 구문처럼 unknown 타입을 서브 타입으로 캐스팅하면 오류 발생.
let word: string = value; // 오류
```

## 3. never

- never 는 수퍼타입이 될 수 없다.
- never 는 존재할 수 없는 값이다.
- never 는 모든 타입의 서브 타입이다.

```ts
let value: never = "hello";
// never 는 수퍼타입이 될 수 없다.
value = 5;
```

## 4. void

- void 는 undefined 의 수퍼타입
- void 는 any 나 unknown 의 서브타입

```ts
let value: void;
let go: undefined = undefined;
// void 는 undefined 의 수퍼타입
value = go;
value = undefined;
// any 나 unknown 이 아니므로
go = void;
value = 5;

function say (_count: number) {
  return "hello" + _count;
}
let result: void;
//  string 은 void 의 서브 타입이 아니라서 호환안됨
result = say(1000);

```

## 5. string, number, boolean

- 위의 타입은 `각각의 리터럴 타입`의 수퍼타입.
- 위의 타입은 각각 any, unknown 의 서브타입.

```ts
// 리터럴은 실제 값을 말한다.
// 아래는 "hello" 는 "hello" 라는 리터럴이다.
const constStr: "hello" = "hello";

// const 상수로 만들면 값 은 "hello" 로 고정이 된다.
// 그러나 어찌되었든 "hello" string;

// "hello" 리터럴은 문자열에 포함된다. (업캐스팅 된다)
let str: string = constStr;

// 리터럴로 표현하면
let num: 100 = 100;
// 100 르터럴은 숫자형에 포함된다. (업캐스팅 된다)
let num2: number = num;

// false 리터럴은 boolean 에 포함된다. (업캐스팅 된다)
const isLive: boolean = false;
```
