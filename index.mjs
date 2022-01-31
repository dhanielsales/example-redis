import { createClient } from 'redis';

(async () => {
  const client = createClient({
    url: "redis://default:password@localhost:6379",
  });

  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();

  await client.set('key', 'value');
  const value = await client.get('key');
  console.log(value);
})();