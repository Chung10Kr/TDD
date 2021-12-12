class Stack{
    constructor(){
        this._size = 0;
        this.head = null;
    }
    size(){
        return this._size;
    }
    push(item){
        const node = {
            item : item,
            next : this.head
        };
        this.head = node;
        this._size++;
    }
    pop(){
        if( this.head === null ){
            throw new Error('Stack is empty')
        };
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.item;
    }
    findItem(findItem){
        var next = null;
        for( let i=0; i<this._size; i++){
            var {
                'item':item,
                'next':next
            } = next||this.head;
            if( item == findItem) return 'exist';

        }
        return 'non-exist';
    }


}
module.exports = Stack;