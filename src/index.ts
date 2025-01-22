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
