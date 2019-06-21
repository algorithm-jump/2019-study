function debounce(fn, delay=200) {
    var timer;
        return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timer);
            timer = setTimeout(function(){
                fn.apply(context, args);
            }, delay);
        }
}