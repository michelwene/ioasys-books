import { Container } from "./style";

interface InputProps {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  isButton?: React.ReactNode;
}

export function Input({
  name,
  label,
  type,
  placeholder,
  isButton,
}: InputProps) {
  return (
    <>
      <Container>
        <div>
          {!!label && <label htmlFor={name}>{label}</label>}
          <input name={name} id={name} type={type} placeholder={placeholder} />
        </div>
        {isButton}
      </Container>
    </>
  );
}
