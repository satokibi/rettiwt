let leet = {};

window.onload = function() {
  leet.form = document.forms.form_leet;
  leet.leet_text = document.getElementById("leet_text");

  document.getElementById("form_leet_button").addEventListener("click", function() {
    let input_str = leet.form._text.value;
    let leet_str = "";
    for( let ch of input_str ) {
      let rand = Math.random() * 100;
      if( rand > 70 )
        leet_str += to_leet(ch);
      else
        leet_str += ch;
    }
    leet.leet_text.innerHTML = leet_str;
  });


  window.open('https://twitter.com/share?text='+ 'test' + '', '', 'scrollbars=yes, width=500, height=300, left=100, top=100,');

}

// let str_ = "た͜͜͏̘̣͔͙͎͎̘̜̫̗͍͚͓͜͜͏̘̣͔͙͎͎す͜͜͏̘̣͔͙͎͎ơ̟̤̖̗͖͇̍͋̀͆̓́͞͡け̜ͪ̅̍̅͂͊て";
// let char1 = "た͜͜͏̘̣͔͙͎͎̘̜̫̗͍͚͓͜͜͏̘̣͔͙͎͎";
// document.write(str_);
// document.write(char1.charCodeAt(0));
// document.write(String.fromCodePoint(0x40));
// document.write(String.fromCodePoint(0x61, 0x0359, 0x0359));
// document.write(String.fromCodePoint(97, 0x0359, 0x0359));
// document.write(String.fromCodePoint(97, 363, 363));
// document.write("a".codePointAt());
// let str = "This tweet is test.";
// document.write("<br>");
// document.write(str);
// for( let ch of str) {
//   //document.write(ch);
//   //document.write(ch.codePointAt());
//   document.write(String.fromCodePoint(ch.codePointAt(), 0x0359));
//   //document.write("<br>");
// };



function to_leet(ch) {
  let leet = {'A': ['4', '@', '/'],
              'B': ['|3','8'],
              'C': ['&lt;', '(', '['],
              'D': ['|)', ')'],
              'E': ['3', '&amp;'],
              'F': ['|=', 'ph', '/='], 
              'G': ['6', '9', '[,'],
              'H': ['#', '|-|', '9#'],
              'I': ['1', '!', '|'],
              'J': ['_|', '_/'],
              'K': ['|&lt;', 'X'],
              'L': ['1', '|'],
              'M': ['|v|', 'AA', '|/|'],
              'N': ['||', '^/'],
              'O': ['0', '()', '[]'],
              'P': ['|*', '|o'],
              'Q': ['&lt;|', '(_,)', '()_'],
              'R': ['|2', '12'],
              'S': ['5', '$'],
              'T': ['7', '+'],
              'U': ['(_)', '|_|'],
              'V': ['/', '|/'],
              'W': ['//', 'vv', 'uu'],
              'X': ['&gt;&lt;', '}{'],
              'Y': ['j', '7'],
              'Z': ['2', '7_'],
          };

  let ch_upper = ch.toUpperCase();
  if(ch_upper in leet){
    return leet[ch_upper][Math.floor(Math.random() * leet[ch_upper].length)];
  } else{
    return ch;
  }
}
