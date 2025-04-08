import assert from 'assert';
import { count, increment } from '../count.js';

it('increment 함수를 호출하면, count 데이터가 1 증가!', () => {
  assert.equal(count, 0);
  increment();
  assert.equal(count, 1); // 성공!
});

it('increment 함수를 호출하면, count 값을 반환!', () => {
  assert.equal(increment(), count);
});
