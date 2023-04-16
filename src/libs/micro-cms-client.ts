import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'techblog-tp',
  apiKey: process.env.API_KEY ?? '',
});
