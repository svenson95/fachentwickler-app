import { Pipe, PipeTransform } from '@angular/core';

import { UserService } from '@services/user.service';

@Pipe({
  name: 'alreadyRead',
  pure: false,
})
export class AlreadyReadPipe implements PipeTransform {
  constructor(private user: UserService) {}

  public transform(value: string): boolean {
    if (!this.user.data) return false;
    return this.user.data.progress.includes(value);
  }
}
