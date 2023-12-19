## Live demo

[View demo](https://peterbee.github.io/smartpath-game/example/)

## Game configuration

```html
<div id="root"></div>
<script type="module">
  import SmartPathGame from "https://peterbee.github.io/smartpath-game/dist/smartpath-game.js";
  const Config = await fetch("./config.json").then(r => r.json());
  SmartPathGame.Init(document.getElementById("root"), Config);
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

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.
