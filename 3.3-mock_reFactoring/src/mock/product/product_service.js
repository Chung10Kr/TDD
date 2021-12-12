class ProductService {
  constructor(productClient) {
    //this.productClient = new ProductClient();
    //의존성을 역전시켜야지.
    this.productClient = productClient;
  }

  fetchAvailableItems() {
    return this.productClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;
