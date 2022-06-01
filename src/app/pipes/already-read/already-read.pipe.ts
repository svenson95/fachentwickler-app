import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Pipe({
  name: 'alreadyRead',
  pure: false,
})
export class AlreadyReadPipe implements PipeTransform {
  constructor(public auth: AuthService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public transform(value: string, ...args: unknown[]): boolean {
    if (!this.auth.user) return false;
    return this.auth.user.progress.includes(value);
  }
}
