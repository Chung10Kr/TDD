const Calculator = require('../Calculator.js');

describe('Calculator', ()=>{

  it('init With 0',()=>{
    const cal = new Calculator();
    expect(cal.value).toBe(0);
  });


  it('Set',()=>{
    const cal = new Calculator();
    cal.set(10)
    expect(cal.value).toBe(10);
  });

  
  it('Add',()=>{
    const cal = new Calculator();
    cal.clear()
    cal.set(10)
    cal.add(10)
    expect(cal.value).toBe(20);
  });

  it('multiply',()=>{
    const cal = new Calculator();
    cal.set(10)
    cal.multiply(2)
    expect(cal.value).toBe(20);
  });

  it('Add Should Throw an error if value is over 100',()=>{
    const cal = new Calculator();
    
    expect(()=>{
      cal.add(101)
    }).toThrow('Value can not be greater than 100')
  });

  it('Subtract',()=>{
    const cal = new Calculator();
    /*
    Calculator 가 여러번 선언되었다고 최 상단에 선언하면 안됨
    왜냐하면 각각의 테스트는 독립적으로 유지되어야함

    각각의 테스트가 다른 테스트에 영향을 주면 안됨

    그러나 그래도 중복코드가 싫으면
    BeforEach나 테스트 전에 선언하는거로 해줘야하지
    최상단에 선언해서 다른 테스트에 영향을 주면 안됨
    
    */
    cal.set(10)
    cal.subtract(3)
    expect(cal.value).toBe(7);
  });



  describe('Divides', ()=>{

    if('0/0 === NaN',()=>{
      const cal = new Calculator();
      cal.divide(0)
      expect(cal.value).toBe(NaN)
    });

    if('1/0 === Infinity',()=>{
      const cal = new Calculator();
      cal.set(1)
      cal.divide(0)
      expect(cal.value).toBe(Infinity)
    });

    if('4/4 === Infinity',()=>{
      const cal = new Calculator();
      cal.set(4)
      cal.divide(4)
      expect(cal.value).toBe(1)
    });
  });







});


