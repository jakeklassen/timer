module.exports = {
  _stack: [],
  _tid: 0,

  start: function () {
    var stamp = process.hrtime();
    ++this._tid;
    this._stack.unshift({
      id: this._tid,
      elapsed: (stamp[0] * 1e9 + stamp[1]) / 1e9
    });
  },

  stop: function () {
    var stamp = process.hrtime();
    stamp = ((stamp[0] * 1e9 + stamp[1]) / 1e9);
    var obj = this._stack.shift();
    obj.elapsed = stamp - obj.elapsed;
    return obj;
  }
}
