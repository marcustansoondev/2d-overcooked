import { Application, Sprite, Texture } from "pixi.js";

const app = new Application({
  backgroundColor: 0x000000,
  resizeTo: window
});
document.body.appendChild(app.view);

// Load textures
const textureBunny = Texture.from("https://pixijs.com/assets/bunny.png");
const textureEgg = Texture.from("https://pixijs.com/assets/eggHead.png");
const textureFlower = Texture.from("https://pixijs.com/assets/flowerTop.png");

const sprites = [];

app.stage.eventMode = "static";
app.stage.hitArea = app.screen;

app.stage.on("pointerdown", (e) => {
  const index = Math.floor(Math.random() * 3);
  let sprite;

  switch (index) {
    case 0:
      sprite = new Sprite(textureBunny);
      break;
    case 1:
      sprite = new Sprite(textureEgg);
      sprite.scale.set(0.5);
      break;
    case 2:
      sprite = new Sprite(textureFlower);
      sprite.scale.set(0.5);
      break;
  }

  sprite.anchor.set(0.5);
  sprite.x = e.global.x;
  sprite.y = e.global.y;
  sprite.vx = (Math.random() - 0.5) * 10;
  sprite.vy = (Math.random() - 0.5) * 10;

  app.stage.addChild(sprite);
  sprites.push(sprite);
});

app.ticker.add(() => {
  for (const s of sprites) {
    s.x += s.vx;
    s.y += s.vy;
    s.vy += 0.2; // gravity
    if (s.x < 0 || s.x > app.screen.width) s.vx *= -1;
    if (s.y > app.screen.height) {
      s.y = app.screen.height;
      s.vy *= -0.8;
    }
    s.rotation += 0.01;
  }
});
