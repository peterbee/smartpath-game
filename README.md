This project is built with [Vitejs](https://vitejs.dev/).

## SmartPath Game configuration

```js
import Config from './config.json';
import SmartPathGame from "../dist/smartpath-game.js";
SmartPathGame.Init(document.getElementById('root'), Config);
```

## Development

Install dependencies (first time only):

```bash
npm install
```

Run development mode:

```bash
npm start
```

Open [http://localhost:5173/dev-root/](http://localhost:5173/dev-root/) with your browser to see the result.

## 

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
