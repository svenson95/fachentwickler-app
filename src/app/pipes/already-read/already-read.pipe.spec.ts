import { AlreadyReadPipe } from './already-read.pipe';

describe('AlreadyReadPipe', () => {
  it('create an instance', () => {
    const pipe = new AlreadyReadPipe(null);
    expect(pipe).toBeTruthy();
  });
});
