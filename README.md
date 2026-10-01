# HEAD e GET em redirecionamentos HTTP

Laboratório local para mostrar por que uma resposta `HEAD` não deve ser a única verificação de um link. A diferença entre os métodos neste exemplo é proposital; o código não representa a implementação de um serviço real.

Execute `node redirect-lab.mjs`. Em outro terminal, compare:

```bash
curl -I http://127.0.0.1:8765/curto
curl -sS -D - -o /dev/null http://127.0.0.1:8765/curto
curl -sS -L --max-redirs 5 -D - -o /dev/null http://127.0.0.1:8765/curto
```

Exemplo preparado pela equipe do [encurtar.link](https://encurtar.link/).
