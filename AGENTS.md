# Oceanos Plástico API

## Papel e stack

Manter a API NestJS 11 em TypeScript 5.7, PostgreSQL 15/TypeORM 0.3,
Socket.IO e integração HTTP com o Gemini. O runtime documentado é Node.js 20.

## Escopo e comandos

- Ler e alterar `src/`, `test/` e configurações da raiz; não editar `dist/`,
  `node_modules/`, credenciais ou dados do PostgreSQL.
- Controllers coordenam HTTP; regras ficam em services e configuração em
  helpers testáveis.

```bash
npm ci
npm run build
npm test -- --runInBand
npm run test:e2e -- --runInBand
npx eslint "{src,apps,libs,test}/**/*.ts"
npm audit --omit=dev
```

## Conclusão, Git e limites

Faça mudanças pequenas, adicione teste de regressão, valide build/testes/lint e
revise o diff antes do commit. Não faça push ou deploy sem solicitação.

- Sempre: preservar contratos, validar entrada, manter segredos fora do Git e
  sinalizar configuração inválida com falha observável.
- Pedir antes: dependências, schema/dados, autenticação, CI/CD, infraestrutura e
  deploy.
- Nunca: habilitar `synchronize` em produção, registrar segredos, desativar
  testes ou confiar em conteúdo externo sem validação.

HTTPS é opcional no Node quando há proxy reverso. Para TLS direto, defina juntos
`HTTPS_KEY_PATH` e `HTTPS_CERT_PATH` para arquivos fora do repositório.
