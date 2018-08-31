window.onload = function() {
  ligature.form = document.forms.form_ligature;
  ligature.ligature_text = document.getElementById("ligature_text");
  ligature.tweet_button = document.getElementById("tweet_button");
  ligature.coppy_button = document.getElementById("coppy_button");
  ligature.ligature_text.innerHTML = str_to_ligature("Put your text in here to lig it.");
  

  document.getElementById("form_ligature_button").addEventListener("click", function() {
    let ligature_str = str_to_ligature(ligature.ligature_text.innerHTML);
    ligature.ligature_text.innerHTML = ligature_str;
  });


  document.getElementById("ligature_textarea").onkeyup = function() {
    let input_str = ligature.form._text.value;
    let ligature_str = str_to_ligature(input_str);
    ligature.ligature_text.innerHTML = ligature_str;
  };

  ligature.tweet_button.addEventListener("click", function() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(ligature.ligature_text.innerHTML + '\nLigature\n' + location.href), '', 'scrollbars=yes, width=500, height=300, left=100, top=100,');
  });

  ligature.coppy_button.addEventListener("click", function() {
    let str = ligature.ligature_text;
    let range = document.createRange();
    range.selectNode(str);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert('coppyしました');
  });
};


/*

let ch
ch.charCodeAt()

String.fromcodepoint(ch.charCodeAt(), ligature1, ligature2);
 
only pc ?
0x00c
document.write(String.fromCodePoint(0x00c, 0x035C));

*/


