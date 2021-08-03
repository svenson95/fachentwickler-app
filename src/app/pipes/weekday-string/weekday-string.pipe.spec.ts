import { WeekdayStringPipe } from './weekday-string.pipe';

describe('WeekdayStringPipe', () => {
  it('create an instance', () => {
    const pipe = new WeekdayStringPipe();
    expect(pipe).toBeTruthy();
  });
});
