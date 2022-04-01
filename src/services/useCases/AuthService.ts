import { AxiosError } from 'axios';
import { api, setAuthentication } from 'services/client/api';
import { IPayloadSignIn, IUserData } from 'types/auth';
import { handleSaveDataInCookie } from 'utils/saveDataInCookie';

class AuthService {
  async signIn(payload: IPayloadSignIn): Promise<void> {
    try {
      const { data, headers } = await api.post<IUserData>(
        '/auth/sign-in',
        payload
      );

      setAuthentication(headers.authorization!);

      handleSaveDataInCookie({
        keyCookie: 'userData',
        data: JSON.stringify(data)
      });
      handleSaveDataInCookie({
        keyCookie: 'accessToken',
        data: headers.authorization!
      });
      handleSaveDataInCookie({
        keyCookie: 'refreshToken',
        data: headers.authorization!
      });
    } catch (err) {
      const error = err as AxiosError;

      if (error.isAxiosError) {
        switch (error.response.status) {
          case 401:
            throw new Error('Email e/ou senha incorretos.');
          case 500:
            throw new Error('Infelizmente, algo deu errado.');
          default:
            throw new Error(error.response.statusText);
        }
      }

      throw new Error(err.message);
    }
  }
}

const authService = new AuthService();

export { authService };
