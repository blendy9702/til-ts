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
