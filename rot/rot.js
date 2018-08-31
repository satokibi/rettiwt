window.onload = function() {
  rot.form = document.forms.form_rot;
  rot.rot_text = document.getElementById("rot_text");
  rot.coppy_button = document.getElementById("coppy_button");
  rot.tweet_button = document.getElementById("tweet_button");
  rot.rot_text.innerHTML = str_to_rot("Put your text in here to rotate it.");

  document.getElementById("rot_textarea").onkeyup = function() {
    let input_str = rot.form._text.value;
    let rot_str = str_to_rot(input_str);
    rot.rot_text.innerHTML = rot_str;
  };

  rot.tweet_button.addEventListener("click", function() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(rot.rot_text.innerHTML + '\nRot 180\n' + location.href), '', 'scrollbars=yes, width=500, height=300, left=100, top=100,');
  });

  rot.coppy_button.addEventListener("click", function() {
    let str = rot.rot_text;
    let range = document.createRange();
    range.selectNode(str);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert('coppyしました');
  });

};
