/**
 * 제네릭
 * 클래스 정의에서 제네릭 사용하기
 */

class Pagination<T, U> {
  data: T[] = [];
  message?: U;
  lastDate?: T;
}
let p = new Pagination<string, number>();
let p2 = new Pagination<string, string>();

class Pagination2<T, U, S> {
  data: T[] = [];
  message?: U;
  lastDate?: S;
  // 컨스트럭터에 제네릭 적용하기
  constructor(data: T[], message?: U, lastDate?: S) {
    this.data = data;
    this.message = message;
    this.lastDate = lastDate;
  }
}

let p3 = new Pagination2<string, string, Date>(
  ["a", "b", "c"],
  "hello",
  new Date()
);
