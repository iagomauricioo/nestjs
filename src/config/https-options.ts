import { readFileSync } from 'fs';

export function getHttpsOptions(
  environment: Record<string, string | undefined>,
) {
  const keyPath = environment.HTTPS_KEY_PATH?.trim();
  const certPath = environment.HTTPS_CERT_PATH?.trim();

  if (!keyPath && !certPath) {
    return undefined;
  }

  if (!keyPath || !certPath) {
    throw new Error(
      'HTTPS_KEY_PATH e HTTPS_CERT_PATH devem ser definidos em conjunto',
    );
  }

  return {
    key: readFileSync(keyPath),
    cert: readFileSync(certPath),
  };
}
