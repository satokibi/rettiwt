let leet = {};

window.onload = function() {
  leet.form = document.forms.form_leet;
  leet.leet_text = document.getElementById("leet_text");
  leet.tweet_button = document.getElementById("tweet_button");

  leet.leet_text.innerHTML = str_to_leet("Put your text in here to leet it.");

  document.getElementById("form_leet_button").addEventListener("click", function() {
    let input_str = leet.form._text.value;
    let leet_str = str_to_leet(input_str);
    leet.leet_text.innerHTML = leet_str;
  });


  leet.tweet_button.addEventListener("click", function() {
    //window.open('https://twitter.com/share?text='+ encodeURIComponent(leet.leet_text.innerHTML + '\nLeet speak Translator\n'), '', 'scrollbars=yes, width=500, height=300, left=100, top=100,');

    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(leet.leet_text.innerHTML + '\nleet speak Translator\n') + '&url=' + encodeURIComponent(location.href), '', 'scrollbars=yes, width=500, height=300, left=100, top=100,');
  });
};

function str_to_leet(str) {
  let leet_str = "";
  for( let ch of str ) {
    let rand = Math.random() * 100;
    if( rand > 70 )
      leet_str += to_leet(ch);
    else
      leet_str += ch;
  }
  return leet_str;
}

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
    '0': ['O', 'D'],
    '1': ['I', 'L'],
    '2': ['Z'],
    '3': ['E'],
    '4': ['h', 'A'],
    '5': ['S'],
    '6': ['b', 'G'],
    '7': ['T', 'L', 'j'],
    '8': ['B'],
    '9': ['P'],
  };
  
  ch = ch.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
  });

  let ch_upper = ch.toUpperCase();
  if(ch_upper in leet){
    return leet[ch_upper][Math.floor(Math.random() * leet[ch_upper].length)];
  } else{
    return ch;
  }
}
