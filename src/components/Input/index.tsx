import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react';
import { FieldError } from 'react-hook-form';

import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  label?: string;
  // errorYup: FieldError;
  placeholder?: string;
  isButton?: React.ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, isButton, ...rest },
  ref
) => {
  return (
    <Container>
      <div>
        {!!label && <label htmlFor={name}>{label}</label>}
        <input name={name} id={name} ref={ref} {...rest} />
      </div>
      {isButton}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
