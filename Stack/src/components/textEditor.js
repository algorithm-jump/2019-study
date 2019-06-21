class TextEditor {
    constructor(store) {
        this._store = store;
        this._editor = document.querySelector('.editor');

        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);
        this._handleInput = this._handleInput.bind(this);
        this.render = this.render.bind(this);

        this._editor.addEventListener('focus', this._onFocus);
        this._editor.addEventListener('blur', this._onBlur);
        this._editor.addEventListener('input', debounce(this._handleInput));
    }

    _onFocus() {
        const { history, cursor } = this._store.getState();
        if (history[cursor] === '' && [...this._editor.classList].includes('placeholder')) {
            this._editor.classList.remove('placeholder');
        }
    }

    _onBlur() {
        const { history, cursor } = this._store.getState();
        if (history[cursor] === '') {
            this._editor.classList.add('placeholder');
        }
    }

    _handleInput() {
        const { history, cursor } = this._store.getState();
        // 뒷부분 삭제
        if (cursor + 1 !== history.length) {
            history.length = cursor + 1;
        }

        history[cursor + 1] = this._editor.innerText;
        this._store.setState({ history, cursor: cursor + 1 });
    }

    render(state) {
        const { history, cursor } = state;
        if (document.activeElement !== this._editor){
            this._editor.innerText = history[cursor];
        }

        if (history[cursor] === '') {
            if (document.activeElement !== this._editor) {
                this._editor.classList.add('placeholder');
            }
        } else {
            this._editor.classList.remove('placeholder');
        }
    }
}