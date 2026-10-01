// Laboratório local: mostra por que HEAD e GET precisam ser comparados.
// Inicie com: node redirect-lab.mjs
import http from 'node:http';

http.createServer((request, response) => {
  if (request.url === '/curto') {
    response.writeHead(302, {
      Location: request.method === 'HEAD' ? '/pagina-antiga' : '/pagina-nova',
      'Cache-Control': 'no-store',
    });
    response.end();
    return;
  }

  if (request.url === '/pagina-antiga') {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Página antiga não encontrada\n');
    return;
  }

  if (request.url === '/pagina-nova') {
    response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Página nova\n');
    return;
  }

  response.writeHead(404);
  response.end();
}).listen(8765, '127.0.0.1', () => {
  console.log('Laboratório em http://127.0.0.1:8765/curto');
});
