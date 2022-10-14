import {
  FormGroup,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function passwordUppercase(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const uppercase = /[A-Z]+/.test(value);
    const validpassword = uppercase;
    return !validpassword ? { upperCasepassword: true } : null;
  };
}
export function validateConfirmpassword(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    let newpassword = group.get('newpassword')?.value;
    let cpassword = group.get('cpassword')?.value;
    return newpassword == cpassword ? null : { notSame: true };
  };
}
export function specialeChars(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const specialCharaters = /[!^&*<>()_+\-=\[\]{}`;':"\\|,.\/@#$%?~]+/.test(
      value
    );
    const validpassword = specialCharaters;
    return !validpassword ? { specalCharacter: true } : null;
  };
}
export function numericPass(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const contNumbers = /[0-9]+/.test(value);
    const validpassword = contNumbers;
    return !validpassword ? { numericPass: true } : null;
  };
}
