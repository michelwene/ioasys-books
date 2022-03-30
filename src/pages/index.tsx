import Head from "next/head";
import { Main, Section } from "./style";
import { Input } from "components/Input";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Head>
        <title>Login | Oasys Books</title>
      </Head>
      <Main>
        <Section>
          <div>
            <img src="/logo.svg" alt="Oasys" />
            <p>Books</p>
          </div>
          <form>
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Digite seu email"
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              isButton={<button type="submit">Entrar</button>}
            />
          </form>
        </Section>
      </Main>
    </>
  );
}
