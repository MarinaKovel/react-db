/* eslint-disable no-console */
import fs from 'fs';
import path from 'node:path';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'node:url';
import type { Request, Response } from 'express';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const html = path.resolve(dirname, 'index.html');

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

async function startServer() {
  const app = express();

  app.use(vite.middlewares);

  app.use('*', async (req: Request, res: Response) => {
    const url = req.originalUrl;

    try {
      let template = fs.readFileSync(html, 'utf8');
      template = await vite.transformIndexHtml(url, template);
      const [start, end] = template.split('<!--app-html-->');

      const { render } = await vite.ssrLoadModule('./src/entry-server.tsx');

      res.write(start);
      const { stream, preloadedState } = await render(url, {
        onShellReady() {
          stream.pipe(res);
        },
        onAllReady() {
          const cards = end.replace('<!--api-data-->', preloadedState());
          res.write(cards);
          res.end();
        },
        onShellError(err: Error) {
          console.log(err);
        },
      });
    } catch (err) {
      console.log(err);
    }
  });

  return app;
}

const port = process.env.PORT || 3030;

startServer().then((app) => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
