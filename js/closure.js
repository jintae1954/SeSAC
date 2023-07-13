const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxFree: 1 },
};

function bill() {
  const orderedItems = [];
  const billFormat = () => {
    console.log("=".repeat(21));
  };
  const makeRightString = (s, len = 9) => {
    s = s.toLocaleString();
    const t = ' '.repeat(len) + s + '원';
    return t.substring(t.length - len);
  };
  const pritTaxes = (tax) => {
    console.log("부가세액: ", makeRightString(tax));
    console.log(" - ".repeat(7));
  };
  const printTotalPrices = (prices) => {
    console.log("주문합계: ", makeRightString(prices));
  }; 
  const printTotalTaxes = (taxes) => {
    console.log("세액합계: ", makeRightString(taxes));
  }; 
  return {
    order(thing) {
      orderedItems.push(thing);
    },
    printBill() {
      billFormat();
      let prices = 0, taxes = 0;
      for (item of orderedItems) {
        let price = MENU[item].price;
        let tax = MENU[item].taxFree === 1 ? 0 : Math.round((MENU[item].price / 1.1) * 0.1);
        console.log(item);
        console.log("공급가액: ", makeRightString(price));
        prices += price;
        MENU[item].taxFree === 1 ? pritTaxes(0) : pritTaxes(tax), taxes += tax;
      }
      printTotalPrices();
      printTotalTaxes();
      billFormat();
    }
  };
}

const table1 = bill();
table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

table1.order('탕슉');
table1.printBill();

table1.order('짬뽕');
table1.printBill();