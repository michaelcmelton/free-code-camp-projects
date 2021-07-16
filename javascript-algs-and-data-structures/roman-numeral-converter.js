/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  const romanMap = new Map();
  romanMap.set(1, "I");
  romanMap.set(4, "IV");
  romanMap.set(5, "V");
  romanMap.set(9, "IX");
  romanMap.set(10, "X");
  romanMap.set(40, "XL");
  romanMap.set(50, "L");
  romanMap.set(90, "XC");
  romanMap.set(100, "C");
  romanMap.set(400, "CD");
  romanMap.set(500, "D");
  romanMap.set(900, "CM");
  romanMap.set(1000, "M");
  const str = [];

  var trackedNum = num;
  do {
    if (trackedNum >= 1000) {
      str.push(romanMap.get(1000));
      trackedNum -= 1000;
    } else if (trackedNum >= 900) {
      str.push(romanMap.get(900));
      trackedNum -= 900;
    } else if (trackedNum >= 500) {
      str.push(romanMap.get(500));
      trackedNum -= 500;
    } else if (trackedNum >= 400) {
      str.push(romanMap.get(400));
      trackedNum -= 400;
    } else if (trackedNum >= 100) {
      str.push(romanMap.get(100));
      trackedNum -= 100;
    } else if (trackedNum >= 90) {
      str.push(romanMap.get(90));
      trackedNum -= 90;
    } else if (trackedNum >= 50) {
      str.push(romanMap.get(50));
      trackedNum -= 50;
    } else if (trackedNum >= 40) {
      str.push(romanMap.get(40));
      trackedNum -= 40;
    } else if (trackedNum >= 10) {
      str.push(romanMap.get(10));
      trackedNum -= 10;
    } else if (trackedNum >= 9) {
      str.push(romanMap.get(9));
      trackedNum -= 9;
    } else if (trackedNum >= 5) {
      str.push(romanMap.get(5));
      trackedNum -= 5;
    } else if (trackedNum >= 4) {
      str.push(romanMap.get(4));
      trackedNum -= 4;
    } else if (trackedNum >= 1) {
      str.push(romanMap.get(1));
      trackedNum--;
    }
  } while (trackedNum > 0);
  return str.join("");
}

console.log(convertToRoman(44));
