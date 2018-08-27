window.onload = function() {
  let main_text = document.getElementById("main_text");
  main_text.innerHTML = str_to_rot('under construction');
};

function str_to_random(str) {
  let random_str = "";
  for( let ch of str ) {
    // 0 - 2
    let rand = Math.floor(Math.random() * 3);
    if( rand == 0 ) {
      random_str += to_leet(ch);
    }
    else if( rand == 1 ) {
      random_str += to_rot(ch);
    }
    else {
      random_str += ch;
    }
  }
  return random_str;
}


