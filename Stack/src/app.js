class App{
    constructor(){
        const initState = {
            cursor: 0,
            history: ['']
        };

        const store = createStore(initState);
        const b = new Button(store);
        const e = new TextEditor(store);

        store.subscribe(b.render);
        store.subscribe(e.render);
    }
}

new App();