export default function RomanToInt(text) {
    text = text.toUpperCase();
    var table = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
      };
    var res = 0;
    for (var i=0;i<text.length;i++){
        if (table[text[i+1]]>table[text[i]]){
            res = res + table[text[i+1]] - table[text[i]];
            i++
        }else{
            res = res + table[text[i]]
        }
    }
    return res
}
