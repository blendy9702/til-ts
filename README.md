# 인터페이스

- type 문법이 먼저 정의됨.
- type 문법으로 사용자 정의 타입을 하다보니 부족함
- type 문법에서 추가적으로 나오게 된 것이 interface.
- 많은 개발자들이 type 과 interface 를 혼란스러워한다.
- 90% 이상은 type 사용이나 interface 를 적용하는 곳이 같다.
- interface 는 type 에 기능을 좀더 확장시키고, 원활하게 쓰도록 해주는 추가 문법이다.

## 1. 인터페이스와 타입 정의에서의 동일한 예

```ts
// 타입은 우리가 원하는 데이터 모양을 만들기 위한 것
type Animal = {
  readonly name: string;
  age?: number;
};
// 아래는 헝가리언 표기법
// C++, JAVA 등에서는 I 를 붙여 interface 로 컨벤션 함.
interface IAnimal {
  readonly name: string;
  age?: number;
}

const cat: Animal = {
  name: "야옹이",
  // age: 10,
};
cat.name = "고양이"; // 읽기 전용

const dog: Animal = {
  name: "멍머이",
  // age: 10,
};
dog.name = "멍머이"; // 읽기 전용
```

## 2. 인터페이스의 문법을 정의

- 데이터의 타입 종류가 `기본형`이면 type 으로 정의
- 데이터의 타입 종류가 `객체형`이면 interface 로 정의.

```ts
type A = string | number;
interface B {}
```

- 데이터의 타입에 `확장(상속)`이 필요하다면 interface 로 정의.
- 단계 1

```ts
interface Animal {
  name: string;
  age: number;
}
interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  age: number;
}
interface Chicken {
  name: string;
  age: number;
}
```

- interface 는 데이터 모양에 대한 약속, 규약

```ts
interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {}
interface Cat extends Animal {}
interface Chicken extends Animal {}
```

- 규칙을 지키면서 추가(확장) 속성 정의

```ts
// 정의되어야 하는 속성에 대한 약속
interface Animal {
  name: string;
  age: number;
}
// 확장(상속)을 통한 기본 규칙을 지키고,
// 별도의 속성을 추가로 정의
interface Dog extends Animal {
  isBark: boolean; // 추가 속성
}
interface Cat extends Animal {
  isScratch: boolean; // 추가 속성
}
interface Chicken extends Animal {
  isFly: boolean; // 추가 속성
}
```

- 기본 인터페이스 속성의 재정의 가능

```ts
// 정의되어야 하는 속성에 대한 약속
interface Animal {
  name: string;
  age: number;
}
// 확장(상속)을 통한 기본 규칙을 지키고,
// 별도의 속성을 추가로 정의
interface Dog extends Animal {
  isBark: boolean; // 추가 속성
  name: "DOG"; // 속성의 재정의(호환가능해야 함.)
  age: "10살"; // 오류: 기본 속성의 타입 호환 안됨.
}
interface Cat extends Animal {
  isScratch: boolean; // 추가 속성
  name: "CAT"; // 속성의 재정의(호환가능해야 함.)
  age: "10살"; // 오류: 기본 속성의 타입 호환 안됨.
}
interface Chicken extends Animal {
  isFly: boolean; // 추가 속성
  name: "CHICKEN"; // 속성의 재정의(호환가능해야 함.)
  age: "10살"; // 오류: 기본 속성의 타입 호환 안됨.
}
```

- 다중 확장(상속)이 가능하다.

```ts
// 정의되어야 하는 속성에 대한 약속
interface Animal {
  name: string;
  age: number;
}
// 확장(상속)을 통한 기본 규칙을 지키고,
// 별도의 속성을 추가로 정의
interface Dog extends Animal {
  isBark: boolean; // 추가 속성
}
interface Cat extends Animal {
  isScratch: boolean; // 추가 속성
}
interface Chicken extends Animal {
  isFly: boolean; // 추가 속성
}

// 다중 상속
interface DogCat extends Dog, Cat {}
const ani: DogCat = {
  name: "개냥이",
  age: 10,
  isBark: false,
  isScratch: true,
};
```

- 선언을 합치기는 interface 에서 가능함.

```ts
// 아래 상황은 Person 인터페이스는 하나로 합쳐진다.
interface Person {
  name: string;
  age: number;
}
interface Person {
  hobby: string;
}
// 최종 보양은 아래와 같다.
interface Person {
  name: string;
  age: number;
  hobby: string;
}
const who: Person = {
  name: "hong",
  age: 10,
  hobby: "coding",
};
```

- 주의 사항

```ts
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
```

## 3. interface 와 type 구분(차이점)

- 인터페이스는 `객체의 구조`를 정의함.
- 타입은 다양한 타입(유니온, 튜플 등) 정의가능.
- 인터페이스는 확장 가능함(`extends`)
- 타입은 `& 연산자`로 확장 가능함.
- 인터페이스는 `중복 선언가능`(자동 병합)
- 타입은 중복 성언 불가능
- 인터페이스는 컴파일시 `최적화 자동` 진행됨.
- 타입은 최적화 안되고 코드가 길어짐.

## 4. interface 를 이해하여야 함.

- 클래스에 반드시 구현해야 되는 기능을 사전에 정의 함.

## 5. 정리

- `객체 데이터 모양`은 일단 `인터페이스로 정의한다`고 생각하자.
- 추후 Promise 에 데이터 모양은 type 이 아니라 interface 를 활용하자.
- axios, fetch, XMLHttpRequest 등은 모두 Promise 를 리턴한다.
- `function async 함수():Promise<인터페이스>`
