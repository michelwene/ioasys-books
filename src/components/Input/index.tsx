import { Container } from "./styles";

interface InputProps {
  name: string;
  label?: string;
  type: string;
}

export function Input({ name, label, type }: InputProps) {
  return (
    <>
      <Container>
        {!!label && <label htmlFor={name}>{label}</label>}
        <input name={name} id={name} type={type} />
      </Container>
    </>
  );
}
