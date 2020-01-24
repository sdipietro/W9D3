const HanoiGame = require('./game.js');
const HanoiView = require('./toh-view.js');

$(() => {
  const rootEl = $('.toh');
  const game = new HanoiGame();
  new HanoiView(game, rootEl);
});
