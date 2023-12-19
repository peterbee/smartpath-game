This project is built with [Vitejs](https://vitejs.dev/).

## SmartPath Game configuration

```html
<div id="root"></div>
<script type="module">
  import Config from './config.json';
 import SmartPathGame from "https://peterbee.github.io/smartpath-game/dist/smartpath-game.js"; 
 SmartPathGame.Init(document.getElementById('root'), Config);
<script>
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
