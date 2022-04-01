import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import Head from 'next/head';
import router from 'next/router';

import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/Input';
import { InputError } from 'components/InputError';
import { Tooltip } from 'components/Tooltip';
import { authService } from 'services/useCases/AuthService';
import { Main, Section } from 'styles/home';
import * as yup from 'yup';

interface IValuesFormSignIn {
  email: string;
  password: string;
}

const signInSchema = yup.object({
  email: yup.string().email('Email inválido').required('Email obrigatório*'),
  password: yup.string().required('Senha obrigatória*')
});

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorRequest, setErrorRequest] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  async function handleSignIn(values: IValuesFormSignIn) {
    try {
      setIsLoading(true);

      await authService.signIn(values);

      router.push('/livros');
    } catch (err) {
      setErrorRequest(err.message);
      setTimeout(() => {
        setErrorRequest(null);
      }, 3000);
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
              {...register('email')}
            />
            {errors.email ? (
              <InputError type={errors.email.type} field="email" />
            ) : null}

            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              {...register('password')}
              isButton={
                <button type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <AiOutlineLoading3Quarters size={20} />
                  ) : (
                    'Entrar'
                  )}
                </button>
              }
            />
            {errors.password ? (
              <InputError type={errors.password.type} field="password" />
            ) : null}

            {!!errorRequest && <Tooltip text={errorRequest} />}
          </form>
        </Section>
      </Main>
    </>
  );
}
