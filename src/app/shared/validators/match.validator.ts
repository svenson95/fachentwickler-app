import { AbstractControl, ValidatorFn } from '@angular/forms';

export function inputsMatch(formControl: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.parent && control.parent.controls) {
      if (control.parent.controls[formControl].value !== control.value) {
        return { match: true };
      }
    }
    return null;
  };
}
