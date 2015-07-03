var util = require('./util/util');

module.exports = {
  /*
   * Converts given word to Pig Latin
   * @param {string} word to be converted
   * @returns {string}
   */
  toPigLatin: function(str) {

    if (typeof str === 'string') {
      var vowels = ['a', 'e', 'i', 'o', 'u'];

      if (vowels.indexOf(str.charAt(0)) >= 0) {
        str = str + 'way';
      } else {
        str = str.split('');
        while (true) {
          var w = str.splice(0, 1);
          str.push(w);
          if (vowels.indexOf(str[0]) >= 0) {
            break;
          }
        }
        str.push("ay");
        str = str.join('');
      }
      return str;
    } else {
      return str;
    }
  },

  /*
   * Converts given number to Roman Numeral
   * @param {number} number to be converted
   * @returns {string}
   */
  toRomanNumeral: function(num) {

    if (typeof num === 'number' && (num % 1 === 0)) {
      var dict = {
        '1': 'I',
        '2': 'II',
        '3': 'III',
        '4': 'IV',
        '5': 'V',
        "6": 'VI',
        '7': 'VII',
        '8': 'VIII',
        '9': 'IX'
      };
      var roman = '';
      var x = Math.floor(num / 10);
      var start = 0;
      while (x > 0) {
        roman += 'X';
        x--;
        start = 1;
      }

      for (var i = start; i < num.toString().length; i++) {
        roman += dict[num.toString().charAt(i)];
      }
      return roman;
    } else {
      return num;
    }
  },

  /*
   * Converts given string to NATO Code Fomat
   * Currently supports French and German Codes
   * @param {string} string to be converted
   * @returns {string}
   */
  toNATOCode: function(word, language) {
    var lang = 'nato';
    var code = '';
    var data = '';
    if (typeof word === 'string' && word.length > 0) {
      if (language != undefined && typeof language === 'string') {
        lang = language.toLowerCase();
      }
      switch (lang) {
        case 'german':
          data = require('./data/german');
          break;
        case 'french':
          data = require('./data/french');
          break;
        default:
          data = require('./data/nato');
      }

      function isAlpha(letter) {
        var alphabets = /[a-zA-Z]/;
        return alphabets.test(letter);
      }

      for (var i = 0; i < word.length; i++) {
        if (isAlpha(word.charAt(i).toUpperCase())) {
          code += data.letters[word.charAt(i).toUpperCase()];
          code += ' ';
        } else {
          code += data.additional_letters[word.charAt(i).toUpperCase()];
          code += ' ';
        }
      }

      return code.trim();

    } else {
      return word;
    }
  },

  toMorseCode: function(str) {
    var code = '';
    var data = require('./data/morse');
    if (typeof str === 'string') {
      for (var i = 0; i < str.length; i++) {
        if (data[str.charAt(i).toLowerCase()] != undefined) {
          code += data[str.charAt(i).toLowerCase()] + ' ';
        } else {
          code += str.charAt(i).toUpperCase() + ' ';
        }
      }
    }
    return code.trim();
  },
  /*
   * Converts given String to its list of anagrams
   * @param {string} string to be converted
   * @returns {array}
   */
  toAnagrams: function(word) {
    var list = [];

    function permutation(prefix, postfix) {
      if (postfix.length == 0) {
        list.push(prefix);
      }
      for (var i = 0; i < postfix.length; i++) {
        var newPrefix = prefix + postfix.charAt(i);
        var newPostfix = postfix.substring(0, i) + postfix.substring(i + 1);
        permutation(newPrefix, newPostfix);
      }
    }
    permutation('', word);
    return list;
  },

  /*
   * Converts given String to its spinal case
   * @param {string} string to be converted
   * @returns {string}
   */
  toSpinalCase: function(str) {
    var temp = str.charAt(0);
    str = str.replace(/ /g, '-').replace(/_/g, '-');
    for (var i = 1; i < str.length; i++) {
      if ((str.charAt(i) == str.charAt(i).toUpperCase()) && (str.charAt(i - 1) != ' ') && (str.charAt(i - 1) != '-') && (str.charAt(i) != '-')) {
        temp += '-' + str.charAt(i);
      } else {
        temp += str.charAt(i);
      }
    }
    return temp.toLowerCase();
  },

  /*
   * Converts given Number to its Fibonacci series upto Number
   * @param {number} length of series
   * @returns {array}
   */
  toFibonacci: function(num) {
    var list = [];

    function fib(n) {
      if (n <= 2) {
        return 1;
      }
      return fib(n - 1) + fib(n - 2);
    }

    if (typeof num === 'number') {
      for (var i = 1; i <= num; i++) {
        list.push(fib(i));
      }
    }
    return list;
  },

  /*
   * Converts given String to its complimentary DNA Pair
   * @param {string} dna code to be converted
   * @returns {string}
   */
  toDNABasePair: function(str) {
    var dict = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    };
    var temp = '';
    for (var i = 0; i < str.length; i++) {
      if (dict[str.charAt(i).toUpperCase()] !== undefined) {
        temp += dict[str.charAt(i).toUpperCase()];
      } else {
        temp += str.charAt(i).toUpperCase();
      }
    }
    return temp;
  },

  /*
   * Converts given number to list of prime numbers upto and including given number
   * @param {number} number to be converted
   * @returns {array}
   */
  toPrimes: function(num) {
    var list = [];
    if (typeof num === 'number') {
      for (i = 1; i <= num; i++) {
        if (isPrime(i)) {
          list.push(i);
        }
      }
    }

    function isPrime(value) {
      if (value == 2) {
        return true;
      }
      if (value <= 1 || value % 2 === 0) {
        return false;
      }
      for (var i = 3; i <= value / 2; i++) {
        if (value % i === 0) {
          return false;
        }
      }
      return true;
    }

    return list;
  },

  /*
   * Converts a list of numbers to its LCM
   * @param {array} the numbers whose LCM is to be calculated
   * @returns {number}
   */
  toLCM: function(arr) {
    var lcm_value = 1;
    arr = util.filterNumbers(arr);

    function lcmArray(arr) {
      if (arr.length === 0) {
        return lcm_value;
      }
      lcm_value = (lcm_value * arr[0]) / util.gcd(lcm_value, arr[0]);
      lcmArray(arr.splice(1));
    }

    lcmArray(arr);
    return lcm_value;
  },

  /*
   * Converts a list of numbers to its GCD
   * @param {array} the numbers whose GCD is to be calculated
   * @returns {number}
   */
  toGCD: function(arr) {
    var gcd_value = 0;
    arr = util.filterNumbers(arr);

    function gcdArray(arr) {
      if (arr.length === 0) {
        return gcd_value;
      }
      gcd_value = util.gcd(gcd_value, arr[0]);
      gcdArray(arr.splice(1));
    }

    gcdArray(arr);
    return gcd_value;
  },

  /*
   * Convert to flattened array from any multi dimensional array of varying level of nesting
   * @param {array} multi dimensional array of varying level of nesting
   * @returns {array} single dimensional array containing all the element values from input array
   */
  toFlattenedArray: function(arr) {
    var temp = [];

    function steamroller(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          steamroller(arr[i]);
        } else {
          temp.push(arr[i]);
        }
      }
      return temp;
    }
    return steamroller(arr);
  }

};