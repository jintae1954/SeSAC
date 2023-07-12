const MENU = {
  짜장: { price: 7000 },
  짬뽕: { price: 9900 },
  탕슉: { price: 25000, taxFree: 1 },
};

function bill() {
  const orderedItems = [];
  const makeRightString = (s, len = 9) => {
    s = s.toLocaleString();
    const t = ' '.repeat(len) + s + '원';
    return t.substring(t.length - len);
  }

  return {
    order(thing) {
      orderedItems.push(thing);
    },
    printBill() {
      let prices = 0, taxes = 0;
  
      // bill 시작
      console.log("=".repeat(21));

      // 주문 내역 출력
      for (item of orderedItems) {
        let price = MENU[item].price;
        let tax = Math.round( (MENU[item].price/1.1) * 0.1);

        console.log(item);
        console.log("공급가액: ", makeRightString(price));
        prices += price;

        if(MENU[item].taxFree) {
          console.log("부가세액: ", makeRightString(0));
          console.log(" - ".repeat(7));
        }
        else {
          console.log("부가세액: ", makeRightString(tax) )
          console.log(" - ".repeat(7));
          taxes += tax;
        }
      }

      // 최종 금액 출력
      console.log("주문합계: ", makeRightString(prices));
      console.log("세액합계: ", makeRightString(taxes));

      // bill 끝
      console.log("=".repeat(21));
    }
  };
}

const table1 = bill();
table1.order('짜장');
table1.order('짬뽕');
table1.printBill();

table1.order('탕슉');
table1.printBill();