# Política de Segurança — Oceanos Plástico API

## Escopo e versões suportadas

Esta política cobre API NestJS, autenticação, PostgreSQL, Socket.IO, Swagger e
integrações externas. Sem releases versionadas, somente a branch principal
ativa recebe correções; versões e commits anteriores não têm suporte garantido.

## Reporte privado e resposta

Reporte pelo GitHub Private Vulnerability Reporting/Security Advisory. Se esse
recurso estiver indisponível, peça ao mantenedor um canal privado antes de
enviar detalhes. Não use issue, discussão ou pull request público.

Inclua versão ou commit, impacto, componente, passos mínimos e seguros e uma
mitigação sugerida, se houver. Não inclua dados pessoais ou credenciais reais.
O objetivo é confirmar em 3 dias úteis, fazer triagem inicial em 7 e comunicar
andamento a cada 14 dias. Os mantenedores coordenam triagem, correção, validação,
divulgação e crédito antes da publicação.

## Configuração e uso seguro

- Injete banco, JWT, Swagger, CORS, Gemini e TLS por variáveis de ambiente ou
  secret store; nunca os inclua na imagem ou no Git.
- Mantenha `DB_SYNCHRONIZE=false` em produção e aplique migrations revisadas.
- Restrinja `URL_CORS` às origens HTTPS necessárias e proteja o Swagger.
- Termine TLS em proxy confiável ou defina juntos `HTTPS_KEY_PATH` e
  `HTTPS_CERT_PATH` para arquivos montados somente para leitura.
- Valide payloads HTTP/Socket.IO, aplique rate limit no perímetro e não registre
  tokens, senhas, cookies ou dados pessoais.
- Mantenha Node.js, dependências e PostgreSQL suportados e auditados.

Os mantenedores restringem acesso aos relatos, priorizam correções e publicam
advisories após mitigação coordenada. O histórico público fica em
Security/Advisories; ainda não há avisos versionados neste documento.
