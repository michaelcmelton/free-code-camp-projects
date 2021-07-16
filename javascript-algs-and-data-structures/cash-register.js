/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
  // arr len 9
  var change = cash - price;
  var maxChange = cid.reduce((a, b) => a + b[1], 0);
  var currencyMap = new Map();
  let changeArr = [];
  currencyMap.set(0, 0.01);
  currencyMap.set(1, 0.05);
  currencyMap.set(2, 0.1);
  currencyMap.set(3, 0.25);
  currencyMap.set(4, 1);
  currencyMap.set(5, 5);
  currencyMap.set(6, 10);
  currencyMap.set(7, 20);
  currencyMap.set(8, 100);

  var nameMap = new Map();
  nameMap.set(0, "PENNY");
  nameMap.set(1, "NICKEL");
  nameMap.set(2, "DIME");
  nameMap.set(3, "QUARTER");
  nameMap.set(4, "ONE");
  nameMap.set(5, "FIVE");
  nameMap.set(6, "TEN");
  nameMap.set(7, "TWENTY");
  nameMap.set(8, "ONE HUNDRED");

  if (maxChange < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (maxChange === change) {
    return { status: "CLOSED", change: cid };
  } else {
    let change2 = change;
    for (var i = 8; i >= 0; i--) {
      let denom = currencyMap.get(i);
      let label = nameMap.get(i);
      let drawerAmt = cid.filter((i) => i[0] === label)[0][1];
      let amt = 0;
      while (change2 >= denom && drawerAmt > 0) {
        change2 = change2.toFixed(2) - denom;
        drawerAmt = drawerAmt.toFixed(2) - denom;
        amt++;
      }
      changeArr.push([label, amt * denom]);
    }

    changeArr = changeArr.filter((i) => i[1] !== 0);

    console.log(changeArr);
    console.log(change);
    console.log(changeArr.reduce((a, b) => a + b[1], 0).toFixed(2));

    if (
      changeArr.reduce((a, b) => a + b[1], 0) > 0 &&
      change.toFixed(2) === changeArr.reduce((a, b) => a + b[1], 0).toFixed(2)
    ) {
      return { status: "OPEN", change: changeArr };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
