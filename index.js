module.exports = {
  /*
   * Converts given string to Pig Latin
   */
  toPigLatin: function(str) {
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
  }
};