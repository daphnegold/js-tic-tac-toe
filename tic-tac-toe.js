Array.prototype.allSame = function() {
  for(var i = 1; i < this.length; i++) {
    if (this[0] !== this[i] || this[i] === 0) {
      return false;
    }
  }
  return true;
};

function TicTacToe() {
  this.moves = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.turn = 0;
}

// var boxes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

TicTacToe.prototype = {
  winner: function(r, c, player) {
    var row = this.moves[r];
    var col = [this.moves[0][c], this.moves[1][c], this.moves[2][c]];

    // check row & column
    if (row.allSame() || col.allSame()) {
      $("#winner").text(player + " wins!");
    }

    if ((r + c) % 2 === 0) {
      var diagOne = [this.moves[0][0], this.moves[1][1], this.moves[2][2]];
      var diagTwo = [this.moves[2][0], this.moves[1][1], this.moves[0][2]];

      // check diagonals
      if (diagOne.allSame() || diagTwo.allSame()) {
        $("#winner").text(player + " wins!");
      }
    }
  },

  play: function() {
    var self = this;

    $("td").one("click", function() {
      var box = this.id;
      var r = parseInt(box.match(/\d+/g)[0]), c = parseInt(box.match(/\d+/g)[1]);

      if (self.turn % 2 === 0) {
        $("#" + box).text("X");
        self.moves[r][c] = "X";
        self.winner(r, c, "X");
      } else {
        $("#" + box).text("O");
        self.moves[r][c] = "O";
        self.winner(r, c, "O");
      }

      self.turn++;
    });
  }
};
