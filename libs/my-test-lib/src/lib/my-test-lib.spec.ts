import { check } from './my-test-lib';

describe('myTestLib', () => {
  it('should work', () => {
    expect(check()).toEqual('my-test-lib is working');
  });
});
