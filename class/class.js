// declearing class
class product {
  constructor(productName, price, discount, productCode) {
    this.productName = productName;
    this.price = price;
    this.discount = discount;
    this.productCode = productCode;
  }
}
let pencile = new product("pencile", 100, 10, "p01");
console.log(pencile);

//way 2 declearing class
const product1 = class {
  constructor(productname, price, discount, productCode) {
    this.ProductName = productname;
    this.price = price;
    this.discount = discount;
    this.productCode = productCode;
  }
  //   getter
  get getProductName() {
    return this.ProductName;
  }

  //   setter
  set setProductName(ProductName) {
    this.ProductName = ProductName;
  }
};

let chair = new product1("chair", 1400, 10, "c001");
console.log(chair);

