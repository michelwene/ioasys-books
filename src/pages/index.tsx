import { useState } from "react";
import Head from "next/head";
import router from "next/router";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Main, Section } from "styles/home";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/Input";
import { useForm } from "react-hook-form";
import { authService } from "services/useCases/AuthService";

import * as yup from "yup";

interface IValuesFormSignIn {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().email(),
  password: yup.string().min(6),
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  async function handleSignIn(values: IValuesFormSignIn) {
    try {
      setIsLoading(true);

      await authService.signIn(values);

      router.push("/livros");
    } catch (err) {
      alert(err);
    } finally {
      setIsLoading(false);
    }
  }

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
          <form onSubmit={handleSubmit(handleSignIn)}>
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              {...register("password")}
              isButton={
                <button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <AiOutlineLoading3Quarters size={20} />
                  ) : (
                    "Entrar"
                  )}
                </button>
              }
            />
          </form>
        </Section>
      </Main>
    </>
  );
}
