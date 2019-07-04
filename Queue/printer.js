function Printer() {
    this.buffer = queue;
    this.flag = false;
}
Printer.prototype = {
    insert: function (data, length) {
        this.buffer.push({data, length})
    },
    process: function () {
        var _this = this;
        if (_this.wait()) {
            console.log('wait...');
            while (!_this.wait()) {
                break;
            }
        }
        _this.flag = true;

        return new Promise(function (resolve) {
            setTimeout(function () {
                // process...
                console.log('in process...');
                _this.flag = false;
                resolve(_this.buffer.pop());
            }, 2000);
        });
    },
    wait: function () {
        return this.flag ? true : false;
    }
};
