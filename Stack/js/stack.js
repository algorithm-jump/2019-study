const Stack = (() => {
    return class{
        constructor(){
            this.stack = [];
            this.top = -1;
        }
        
        push(text){
            this.stack[++this.top] = text;
        }

        pop(){
            if(this.empty()){
                throw Error('is empty');
                return;
            }
            return this.stack.splice(this.top--, 1)[0];
        }

        get data(){
            return this.stack;
        }
        
        get size(){
            return this.top + 1;
        }

        get peek(){
            return this.stack[this.top];
        }

        empty(){
            return this.top === -1 ? true : false;
        }
    }
})();