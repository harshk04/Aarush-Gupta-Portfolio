import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { handleContactRequest } from './server/contact-mail.js';

const contactApiPlugin = () => ({
  name: 'contact-api',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url?.startsWith('/api/contact') && req.method === 'POST') {
        await handleContactRequest(req, res);
        return;
      }

      next();
    });
  },
});

export default defineConfig({
  plugins: [react(), contactApiPlugin()],
  server: {
    host: true,
    port: 5173,
  },
});
