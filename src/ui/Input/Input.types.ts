import { ChangeEvent } from 'react';

export interface InputPropsType {
  value?: string;
  type?: 'text' | 'email';
  placeholder?: string;
  fluid?: boolean;
  autoFocus?: boolean;
  required?: boolean;
  className?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
}
