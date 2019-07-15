import { NgSetupOptions, ngExpressEngine } from '@nguniversal/express-engine';
import * as ddos from 'ddos';
import * as express from 'express';
export interface ServerAPIOptions {
  distPath: string;
  ngSetup?: NgSetupOptions;
}

export function createApi(options: ServerAPIOptions) {
  const router = express();

  router.use(createNgRenderMiddleware(options.distPath, options.ngSetup));

  return router;
}

export function createNgRenderMiddleware(
  distPath: string,
  ngSetup: NgSetupOptions
) {
  const ddosConf = new ddos({ burst: 4, limit: 300 });

  const router = express();
  router.use(ddosConf.express);
  router.use((err, req, res, next) => {
    res.status(429).send('Error, demasiadas peticiones :S');
  });
  router.set('view engine', 'html');
  router.set('views', distPath);

  // Server static files from distPath
  router.get('*.*', express.static(distPath));

  // Angular Express Engine
  router.engine('html', ngExpressEngine(ngSetup));

  // All regular routes use the Universal engine
  router.get('*', (req, res) => res.render('index', { req, res }));

  return router;
}
