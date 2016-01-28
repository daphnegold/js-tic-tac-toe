function TicTacToe() {
  this.board = [[], [], []];
  this.turn = 0;
  this.rowOne = this.board[0];
  this.rowTwo = this.board[1];
  this.rowThree = this.board[2];
}

var boxes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

TicTacToe.prototype = {
  play: function() {
    var self = this;
    boxes.forEach(function(box) {
      $("#" + box).click(function() {
        if (self.turn % 2 === 0) {
          $(this).append('<img src="http://www.clker.com/cliparts/0/7/e/a/12074327311562940906milker_X_icon.svg.hi.png">');
        } else {
          $(this).append('<img src="http://www.clipartbest.com/cliparts/9c4/bn9/9c4bn9Adi.png">');
        }
        self.turn++;
      });
    });
  }
};
