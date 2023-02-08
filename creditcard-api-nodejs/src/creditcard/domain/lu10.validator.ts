import { ValidatorConstraintInterface } from 'class-validator';
import { ValidatorConstraint } from 'class-validator';

@ValidatorConstraint()
export class LU10Validator implements ValidatorConstraintInterface {
  validate(value: string) {
    if (/[^0-9-\s]+/.test(value)) return false;

    let nCheck = 0,
      nDigit = 0,
      bEven = false;

    for (let n = value.length - 1; n >= 0; n--) {
      const cDigit = value.charAt(n);
      nDigit = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigit *= 2) > 9) nDigit -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    return nCheck % 10 === 0;
  }
}
