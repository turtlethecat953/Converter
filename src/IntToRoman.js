export default function IntToRoman(num) {
  var table = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var res = '';

  for (var c in table){
      while (num>=table[c]){
          res += c;
          num -= table[c]
      }
  }
  return res
}