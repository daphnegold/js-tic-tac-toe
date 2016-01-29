Array.prototype.allSame = function() {
  for(var i = 1; i < this.length; i++) {
    if (this[0] !== this[i] || this[i] === 0) {
      return false;
    }
  }
  return true;
};

function TicTacToe() {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.turn = 0;
}

// var boxes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

TicTacToe.prototype = {
  winner: function(r, c, player) {
    var row = this.board[r];
    var col = [this.board[0][c], this.board[1][c], this.board[2][c]];

    // check row & column
    if (row.allSame() || col.allSame()) {
      $("#winner").text(player + " wins!");
    }

    if ((r + c) % 2 === 0) {
      var diagOne = [this.board[0][0], this.board[1][1], this.board[2][2]];
      var diagTwo = [this.board[2][0], this.board[1][1], this.board[0][2]];

      // check diagonals
      if (diagOne.allSame() || diagTwo.allSame()) {
        $("#winner").text(player + " wins!");
      }
    }
  },

  play: function() {
    var self = this;
    $("td").mouseenter(function () {
      var box = this.id;
      if (!$("#" + box).hasClass("played")) {
        if (self.turn % 2 === 0) {
          $("#" + box).text("X");
        } else {
          $("#" + box).text("O");
        }
      }
    });

    $("td").mouseleave(function () {
      var box = this.id;
      if (!$("#" + box).hasClass("played")) {
        $("#" + box).text("");
      }
    });


    $("td").one("click", function() {
      var box = this.id;
      var r = parseInt(box.match(/\d+/g)[0]), c = parseInt(box.match(/\d+/g)[1]);

      if (self.turn % 2 === 0) {
        $("#" + box).text("X");

        self.board[r][c] = "X";
        self.winner(r, c, "X");
      } else {
        $("#" + box).text("O");

        self.board[r][c] = "O";
        self.winner(r, c, "O");
      }

      $("#" + box).addClass("played");
      self.turn++;
    });
  }
};
