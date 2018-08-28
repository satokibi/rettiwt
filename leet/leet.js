window.onload = function() {
  leet.form = document.forms.form_leet;
  leet.leet_text = document.getElementById("leet_text");
  leet.tweet_button = document.getElementById("tweet_button");
  leet.coppy_button = document.getElementById("coppy_button");

  leet.leet_text.innerHTML = str_to_leet("Put your text in here to leet it.");

  document.getElementById("form_leet_button").addEventListener("click", function() {
    let input_str = leet.form._text.value;
    let leet_str = str_to_leet(input_str);
    leet.leet_text.innerHTML = leet_str;
  });


  leet.tweet_button.addEventListener("click", function() {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(leet.leet_text.innerHTML + '\nleet speak\n' + location.href), '', 'scrollbars=yes, width=500, height=300, left=100, top=100,');
  });

  leet.coppy_button.addEventListener("click", function() {
    let str = leet.leet_text;
    let range = document.createRange();
    range.selectNode(str);
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert('coppyしました');
  });

};
