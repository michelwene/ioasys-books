import { setCookie } from 'nookies';

interface ISaveDataInCookieProps {
  keyCookie: string;
  data: string;
  time?: number;
}

export function handleSaveDataInCookie({
  keyCookie,
  data,
  time
}: ISaveDataInCookieProps) {
  setCookie(undefined, `@Ioasy:${keyCookie}`, data, {
    maxAge: time ?? 60 * 60 * 24 * 30, // 30 days
    path: '/'
  });
}
