const Stack = require('../stack.js');

describe('Stack',()=>{

    let stack;
    beforeEach(()=>{
        stack = new Stack();
    });

    it('is created empty',()=>{
        expect(stack.size()).toBe(0);
    });

    it('Allows to Push Item',()=>{
        stack.push('바나나');
        expect(stack.size()).toBe(1);
    });

    describe('Pop',()=>{
        it('Throw an error if statck is empty',()=>{
            expect(()=>{
                stack.pop()
            }).toThrow('Stack is empty');
        });
        it('returns the last item and remove it from the stack',()=>{
            stack.push('바나나');
            stack.push('딸기');
            stack.push('사과');
            let lastItem = stack.pop();
            expect( lastItem ).toBe('사과');
            expect( stack.size() ).toBe(2);
        });
    });


    
    describe('Find Item',()=>{
        it('Exist Item',()=>{
            stack.push('바나나')
            stack.push('애플')
            stack.push('고구마')
            stack.push('양파')
            let result = stack.findItem('고구마');
            expect(result).toBe('exist');
        });
        it('Non-Exist Item',()=>{
            stack.push('바나나')
            stack.push('애플')
            let result = stack.findItem('파인애플');
            expect(result).toBe('non-exist');
        });
    });

});