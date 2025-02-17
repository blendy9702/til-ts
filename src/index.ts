// Key Value 맵핑

enum State {
  LOADING,
  SUCCESS,
  ERROR,
  INITIAL,
}
// API 타입
type ApiState = {
  getUser: State;
  paginateUser: State | undefined;
  defeceUser: State | null;
  getPost: State;
};

// API 타입 2
type UserApiState = {
  getUser: State;
  paginateUser: State | undefined;
  defeceUser: State | null;
};

// API 타입 3
// 아래처럼 구성하면 타입이 변경이 일어나도 추가 작업이 없다.
// 속성이 변화가 일어나도 한번에 모두 변화가 일어난다.
type UserApiState2 = {
  getUser: ApiState["getUser"];
  paginateUser: ApiState["paginateUser"];
  defeceUser: ApiState["defeceUser"];
};

// API 타입 4
type UserApiState3 = {
  [key in "getUser" | "paginateUser" | "defeceUser"]: ApiState[key];
};

// API 타입 5
// 유틸리티 타입
type UserApiState4 = Pick<ApiState, "getUser" | "paginateUser" | "defeceUser">;
// Omit 원하는 것만 제외하는 경우
type UserApiState5 = Omit<ApiState, "getPost">;

/**
 * keyof
 * 속석 값을 타입으로 알아내기
 */

type Allkeys = keyof ApiState;
const key1: Allkeys = "getUser";
const key2: Allkeys = "paginateUser";
const key3: Allkeys = "defeceUser";
const key4: Allkeys = "getPost";
// const key5: Allkeys = "Gogo"; // 오류 발생

type UserApiState6 = {
  [key in keyof ApiState]: ApiState[key];
};

// 유틸리티 사용해 보기
// 항복 한개 빼기
type UserApiState7 = {
  // getPost 제외
  [key in Exclude<keyof ApiState, "getPost">]: ApiState[key];
};

// 항복 한개 빼고 모두 옵션으로 바꾸기
type UserApiState8 = {
  // getPost 속성은 제거하고 나머지 뽑아서 정의
  [key in Exclude<keyof ApiState, "getPost">]?: ApiState[key];
};
