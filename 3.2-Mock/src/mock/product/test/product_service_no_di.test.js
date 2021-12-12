const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');


jest.mock('../product_client');

describe('ProductService', () => {

    // fetchItems의 목
    const fetchItemsMock = jest.fn(async ()=>{
        return [
            {item : 'Milk' , available:true},
            {item : '버네너' , available:false},
            {item : '애플' , available:true},
            {item : '고기' , available:true}
        ]
    })
    // ProductClient의 fetchItems을 fetchItemsMock으로 연결
    ProductClient.mockImplementation(()=>{
        return {
            fetchItems : fetchItemsMock
        };
    });
    let productService;
    
    beforeEach(() => {
        productService = new ProductService();
        /*
        목이 없이 ProductService를 테스트 한다면
        문제가 발생할 수 있음
        뭐냐하면 단위테스트는 서로 상호작용이 아닌 하나의 단위를
        독립적으로 테스트 해야해...
        근데 productService를 생성하고 호출하면
        productService의 안에 fetchItems이것도 테스트하고 그렇다면
        ProductClient의 fetch도 테스트를 하게 되는거잖아.
        그러면 우리도 모르게 테스트를 2개 한다는거야..

        
        */
    });
    it('Product available Filter Test', async () => {

        const items = await productService.fetchAvailableItems();

        const expectResult = [
            {item : 'Milk' , available:true},
            {item : '애플' , available:true},
            {item : '고기' , available:true}
        ];
        expect(items).toEqual( expectResult );
    });
  });