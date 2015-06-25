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
  }

};