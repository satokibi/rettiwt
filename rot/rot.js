window.onload = function() {
  rot.form = document.forms.form_rot;
  rot.rot_text = document.getElementById("rot_text");
  rot.tweet_button = document.getElementById("tweet_button");

  rot.rot_text.innerHTML = str_to_rot("Put your text in here to rotate it.");

  document.getElementById("form_rot_button").addEventListener("click", function() {
    let input_str = rot.form._text.value;
    let rot_str = str_to_rot(input_str);
    rot.rot_text.innerHTML = rot_str;
  });


  rot.tweet_button.addEventListener("click", function() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(rot.rot_text.innerHTML + '\nRot 180\n' + location.href), '', 'scrollbars=yes, width=500, height=300, left=100, top=100,');

  });

};

function str_to_rot(str) {
  let rot_str = "";
  for( let ch of str ) {
    rot_str = to_rot(ch) + rot_str;
  }
  return rot_str;
}

function to_rot(ch) {
  ch = ch.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) - 65248);
  });
  if(ch in rot.rot_ch){
    return rot.rot_ch[ch];
  } else{
    return ch;
  }
}
