import { LongSubjectNamePipe } from './long-subject-name.pipe';

describe('LongSubjectNamePipe', () => {
  it('create an instance', () => {
    const pipe = new LongSubjectNamePipe();
    expect(pipe).toBeTruthy();
  });
});
