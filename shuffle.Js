// Sample example : http://codepen.io/anon/pen/oxjKja

var isEmpty = function(item) {
  return item === null || item === undefined || item.length === 0 || item === "";
}
// or we could have used simple shuffle  -- written later @ http://codepen.io/anon/pen/oxjKja

Math.randomNumberInRange = function(start, end) {
  // since math doesn't have a constructor
  var randomNumber = Math.random(); // between 0 --- 1
  if (isEmpty(end)) {
    // if there is no end function then treat the start as end
    return Math.floor((randomNumber * start));
  }
  return Math.floor((randomNumber * end) + start);
}

Array.prototype.swapItem = function(index1, index2) {
  if (!isEmpty(this[index1])) {
    // swap if not empty
    var temp = this[index1] ;
    this[index1] = this[index2];
    this[index2] = temp;    
  }
}

Array.prototype.shuffle = function() {
  if (isEmpty(this) || this.length === 1) {
    return this;
  }
  var i = 0,
    len = this.length
  mid = len / 2;

  for (i = 0; i < mid; i++) {
    var randomIndex = Math.randomNumberInRange(len); // get a random number upto len position.
    if( i !== randomIndex){
        this.swapItem(i, randomIndex);
      } else {
        this.swapItem(mid, randomIndex);
      }
  }
  randomIndex = Math.randomNumberInRange(mid);
  this.swapItem(len - 1, randomIndex);
  if(mid % 2 === 1){
    this.swapItem(mid, randomIndex);
  }
  return this;
}