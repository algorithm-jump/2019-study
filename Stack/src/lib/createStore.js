const createStore = (initState) => {
    let state = initState || {};
    const listeners = [];

    const publish = () => {
        listeners.forEach(f => f(state));
    }

    return {
        subscribe(listener){
            listeners.push(listener);
        },

        setState(newState){
            state  = {...state, ...newState};
            publish();
        },

        getState(){
            return {...state};
        }
    }
}