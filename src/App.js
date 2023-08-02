import "./styles.css";

export default function App() {
  const solution = (num) => {
    const roman = {
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

    let str = "";
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      console.log(Math.floor(num / roman[i]));
      num -= q * roman[i];
      console.log(num);
      str += i.repeat(q);
      console.log(i.repeat(q));
    }
    //console.log(str);
  };
  const solution1 = (num) => {
    const roman = {
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

    let str = "";
    for (var i of Object.keys(roman)) {
      var q = Math.floor(num / roman[i]);
      num -= q * roman[i];
      str += i.repeat(q);
    }
    return str;
  };

  function solution2(number) {
    // convert the number to a roman numeral
    var roman = {
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

    var ans = "";
    while (number > 0) {
      for (a in roman) {
        if (roman[a] <= number) {
          ans += a;
          number -= roman[a];
          break;
        }
      }
    }
    return ans;
  }

  function solution4(number) {
    return [
      { threshold: 1000, char: "M" },
      { threshold: 900, char: "CM" },
      { threshold: 500, char: "D" },
      { threshold: 400, char: "CD" },
      { threshold: 100, char: "C" },
      { threshold: 90, char: "XC" },
      { threshold: 50, char: "L" },
      { threshold: 40, char: "XL" },
      { threshold: 10, char: "X" },
      { threshold: 9, char: "IX" },
      { threshold: 5, char: "V" },
      { threshold: 4, char: "IV" },
      { threshold: 1, char: "I" }
    ].reduce(function (prev, curr, idx, arr) {
      while (number >= curr.threshold) {
        prev += curr.char;
        number -= curr.threshold;
      }

      return prev;
    }, "");
  }

  function solution5(number) {
    var result = "",
      decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
      roman = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
      ];

    decimals.map(function (value, index) {
      while (number >= value) {
        result += roman[index];
        number -= value;
      }
    });

    return result;
  }

  function solution6(number) {
    var map = {
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
      },
      output = "";

    for (var i in map) {
      while (number >= map[i]) {
        output += i;
        number -= map[i];
      }
    }
    return output;
  }

  solution(10);
  return (
    <div className="App">
      <input />
    </div>
  );
}
