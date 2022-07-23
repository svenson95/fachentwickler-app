/* eslint-disable no-console */
// eslint-disable-next-line max-classes-per-file
import { Injectable } from '@angular/core';

import { environment } from '@env/environment';
import { Message } from '@models/message';

import { LogLevel } from '../types/log-level';

@Injectable({ providedIn: 'root' })
export class LoggingService {
  private greenCode = '\x1b[32m';

  private blueCode = '\x1b[36m';

  private yellowCode = '\x1b[33m';

  private redCode = '\x1b[31m';

  public debug(message: Message, ...data: any): void {
    if (environment.production) return;
    console.debug(`${this.blueCode}${LogLevel.DEBUG}\x1b[0m`, message.value, ...data);
  }

  public info(message: Message, ...data: any): void {
    if (environment.production) return;
    console.info(`${this.greenCode}${LogLevel.INFO}\x1b[0m`, message.value, ...data);
  }

  public warn(message: Message, ...data: any): void {
    if (environment.production) return;
    console.warn(`${this.yellowCode}${LogLevel.WARN}\x1b[0m`, message.value, ...data);
  }

  public error(message: Message, ...data: any): void {
    if (environment.production) return;
    console.error(`${this.redCode}${LogLevel.ERROR}\x1b[0m`, message.value, ...data);
  }
}
