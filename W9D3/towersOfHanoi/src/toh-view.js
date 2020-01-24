class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.container = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
  }

  makeMove($square) {

  }

  setupBoard() {
    const $newUL = $('<ul>');
    this.container.append($newUL);
      for (let j = 0; j < 3; j++) {
        const $newLI = $('<li>');
        // $newLI.data({position: pos});
        $newLI.data("position", j);

        // $newLI.attr('pos', pos);
        $newUL.append($newLI);
    }
  }
}

module.exports = HanoiView;