import Head from "next/head";
import { Main, Section } from "./style";
import bgImg from "../../public/background-image.png";
import { Input } from "components/Input";

export default function Login() {
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
            <Input name="email" label="E-mail" type="email" />
            <Input name="password" label="Senha" type="password" />
            <button type="submit">Entrar</button>
          </form>
        </Section>
      </Main>
    </>
  );
}
