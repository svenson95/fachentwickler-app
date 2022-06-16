import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button.fe-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextComponent {
  @Input() public isLoading: boolean;

  @Input() public type: 'button' | 'submit' | 'reset' = 'button';

  @Input() public disabled?: boolean;

  @HostBinding('class') public get buttonType(): string {
    return this.type;
  }

  @HostBinding('disabled') public get buttonDisabled(): boolean {
    return this.disabled;
  }
}
