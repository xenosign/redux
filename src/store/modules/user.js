// 액션 타입 정의하기
const CREATE = 'user/CREATE';
const DONE = 'user/DONE';

// 액션 생성 함수 작성
export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(key) {
  return {
    type: DONE,
    key,
  };
}
