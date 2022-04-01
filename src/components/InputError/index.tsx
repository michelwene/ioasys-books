import errors from '../../utils/errors.json';
import { Container } from './style';

interface InputErrorProps {
  type: string;
  field: string;
}

export function InputError({ type, field }: InputErrorProps) {
  return (
    <Container>
      <span>{errors[field][type]}</span>
    </Container>
  );
}
