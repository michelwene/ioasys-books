import { AxiosError } from 'axios'
import { api, setAuthentication } from 'services/client/api'
import { handleSaveDataInCookie } from 'utils/saveDataInCookie'

interface IPayloadSignIn {
  email: string;
  password: string;
}

interface IResponseSignIn {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  gender: string;
}

class AuthService {
  async signIn(payload: IPayloadSignIn): Promise<void> {
    try {
      const { data, headers } =  await api.post<IResponseSignIn>('/auth/sign-in', payload);

      setAuthentication(headers.authorization!);

      handleSaveDataInCookie({ keyCookie: 'userData', data: JSON.stringify(data) })
      handleSaveDataInCookie({ keyCookie: 'accessToken', data: headers.authorization! })
    } catch (err) {
      const error = err as AxiosError;
      
      if (error.isAxiosError) {
        switch (error.response.status) {
        case 401:
            throw new Error('Usuário ou senha inválida.')
        case 500:
          throw new Error('Infelizmente, algo deu errado.')
        default:
            throw new Error(error.response.statusText)
        }
      }

        throw new Error(err.message)
      }
    }

    async refeshToken() {
      alert('sdfgfds')
    }
  }

const authService = new AuthService()

export { authService }