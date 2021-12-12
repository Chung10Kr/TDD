class Stack{
    constructor(){
        this.array = [];
    }
    size(){
        return this.array.length;
    }
    push(item){
        this.array.push(item)
    }
    pop(){
        if( this.array.length === 0 ){
            throw new Error('Stack is empty')
        };
        return this.array.pop();
    }
    findItem(item){
        if( (this.array).indexOf(item) != -1) return 'exist';
        return 'non-exist';
    }


}
module.exports = Stack;