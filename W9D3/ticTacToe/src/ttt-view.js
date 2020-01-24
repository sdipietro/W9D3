class View {
  constructor(game, $el) {
    this.game = game;
    this.container = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    
    $('ul').on('click', 'li', (e) => {
      let newPos = $(e.target).data("position");

      if ($(e.target).hasClass('x-class') || $(e.target).hasClass('o-class')) {
        alert("Invalid! Someone is there already!");
      }

      this.game.playMove(newPos);
      this.makeMove(e.target);
    });
  }

  makeMove($square) {
    $square.append(this.game.currentPlayer);
    
    if ($($square).hasClass('x-class')) {
        console.log("alert");
    }

    if (this.game.currentPlayer === 'x') {
      $($square).addClass('x-class');
    } else {
      $($square).addClass('o-class');
    }
    if (this.game.isOver()) {
      $('ul').unbind();
      if (this.game.winner() === 'o') {
        $('.x-class').toggleClass('winner');
        const $mar = document.getElementById("marquee");
        $($mar).text("X WINS!");
      } else if (this.game.winner() === 'x') {
        const $mar = document.getElementById("marquee");
        $($mar).text("O WINS!");
        $('.o-class').toggleClass('winner');
      } else {
        const $mar = document.getElementById("marquee");
        $($mar).text("DRAW!!!");
        $('.o-class').toggleClass('winner');
      }
    }
  
    
  }

  setupBoard() {
    const $newUL = $('<ul>');
    this.container.append($newUL);
    for (let index = 0; index < 3; index++) {
      for (let j = 0; j < 3; j++) {
        const pos = [index,j];
        const $newLI = $('<li>');
        // $newLI.data({position: pos});
        $newLI.data("position", pos);
    
        // debugger
        // $newLI.attr('pos', pos);
        $newUL.append($newLI);
      }
    }
  }
}

module.exports = View;
