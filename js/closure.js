/**
 * Part 1. closure를 활용하여 bill함수를 완성하시오.
 */

const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxFree: 1 },
};

// 보조 함수
const printFormat = (len = 20) => {
  console.log("=".repeat(len));
};
const makeRightString = (s, len = 8) => {
  const t = ' '.repeat(len) + s.toLocaleString() + '원';
  return t.substring(t.length - len);
};
const printOrderAndPriceAndTax = (order, price, tax) => {
  console.log(order);
  console.log("공급가액: ", makeRightString(price));
  console.log("부가세액: ", makeRightString(tax));
};
const printTotalPricesAndTaxes = (prices, taxes) => {
  console.log("주문합계: ", makeRightString(prices));
  console.log("세액합계: ", makeRightString(taxes));
};

function bill() {
  const orders = [];

  // 클로저
  return {
    order(thing) {
      orders.push(thing);
    },
    printBill() {
      printFormat();
      let prices = 0, taxes = 0;
      for (const ordered of orders) {
        let price = MENU[ordered].price;
        let tax = MENU[ordered].taxFree === 1 ? 0 : Math.round( (MENU[ordered].price / 1.1) * 0.1);
        printOrderAndPriceAndTax(ordered, price, tax)
        console.log(" - ".repeat(7));
        prices += price;
        taxes += tax;
      }
      printTotalPricesAndTaxes(prices, taxes);
      printFormat();
    }
  };
}

const table1 = bill();
table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

table1.order('탕슉');
table1.printBill();

table1.order('탕슉');
table1.order('짬뽕');
table1.printBill();