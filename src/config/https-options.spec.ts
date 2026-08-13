import { readFileSync } from 'fs';
import { getHttpsOptions } from './https-options';

jest.mock('fs', () => ({
  readFileSync: jest.fn((path: string) => Buffer.from(path)),
}));

describe('getHttpsOptions', () => {
  const mockedReadFileSync = jest.mocked(readFileSync);

  beforeEach(() => mockedReadFileSync.mockClear());

  it('mantém HTTP quando nenhum certificado foi configurado', () => {
    expect(getHttpsOptions({})).toBeUndefined();
    expect(mockedReadFileSync).not.toHaveBeenCalled();
  });

  it('carrega chave e certificado quando ambos foram configurados', () => {
    expect(
      getHttpsOptions({
        HTTPS_KEY_PATH: '/run/secrets/tls.key',
        HTTPS_CERT_PATH: '/run/secrets/tls.crt',
      }),
    ).toEqual({
      key: Buffer.from('/run/secrets/tls.key'),
      cert: Buffer.from('/run/secrets/tls.crt'),
    });
  });

  it('recusa configuração TLS incompleta', () => {
    expect(() =>
      getHttpsOptions({ HTTPS_KEY_PATH: '/run/secrets/tls.key' }),
    ).toThrow(
      'HTTPS_KEY_PATH e HTTPS_CERT_PATH devem ser definidos em conjunto',
    );
    expect(mockedReadFileSync).not.toHaveBeenCalled();
  });
});
