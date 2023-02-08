import { LU10Validator } from './lu10.validator';
import {
  IsDate,
  IsDecimal,
  IsNumber,
  IsString,
  Validate,
} from 'class-validator';

export class CreditCardDomain {
  @IsString()
  username: string;
  @IsNumber()
  @Validate(LU10Validator, {
    message: 'Credit Card number is not valid',
  })
  cardnumber: number;
  @IsDecimal()
  balance = 0;
  @IsDecimal()
  limit = 0;
  @IsDate()
  updatedAt: Date;
  @IsDate()
  createdAt: Date;
}
