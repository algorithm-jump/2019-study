class Button {
    constructor(store) {
        this._store = store;
        this._prevBtn = document.querySelector('.prev');
        this._nextBtn = document.querySelector('.next');
        this.click = this.click.bind(this);
        this.render = this.render.bind(this);

        this._prevBtn.addEventListener('click', this.click);
        this._nextBtn.addEventListener('click', this.click);
    }

    _isFirst(state) {
        const { cursor } = state;
        return !cursor;
    }

    _isOverflow(state) {
        const { cursor, history } = state;
        return cursor + 1 === history.length;
    }

    _prev() {
        const state = this._store.getState();
        if (this._isFirst(state)) {
            console.log("이전 히스토리가 없습니다.");
        } else {
            this._store.setState({ cursor: state.cursor - 1 });
        }
    }

    _next() {
        const state = this._store.getState();
        if (this._isOverflow(state)) {
            console.log("마지막입니다.");
        } else {
            this._store.setState({ cursor: state.cursor + 1 });
        }
    }

    click(e) {
        e.preventDefault();
        if (e.target === this._prevBtn) {
            this._prev();
        } else {
            this._next();
        }
    }

    render({ cursor, history }) {
        if (cursor) {
            this._prevBtn.removeAttribute('disabled');
        } else {
            this._prevBtn.setAttribute('disabled', true);
        }

        if (cursor + 1 === history.length) {
            this._nextBtn.setAttribute('disabled', true);
        } else if (history.length) {
            this._nextBtn.removeAttribute('disabled');
        }
    }
}
