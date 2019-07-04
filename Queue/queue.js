function Queue() {
  this._buffer = [];
  this._front = 0;
  this._rear = -1;
}

Queue.prototype = {
  push : function (x) {
    this._buffer[++this._rear] = x;
  },
  pop : function () {
    if (this.empty()) return -1;
  
    var data = this._buffer[this._front];
    delete this._buffer[this._front];
  
    if (this._front == this._rear) {
      this._rear--;
      return data;    
    }
  
    this._front++;
    return data;
  },
  size : function () {
    return this._rear - this._front + 1;
  },
  empty : function () {
    if (!this.size()) return true;
    return false;
  },
  front : function () {
    if (this.empty()) return -1;
    return this._buffer[this._front];
  },
  back : function () {
    if (this.empty()) return -1;
    return this._buffer[this._rear];
  }
};

const queue = new Queue();