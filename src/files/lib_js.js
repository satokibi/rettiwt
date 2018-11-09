let leet = {}; 
leet.leet_ch = {'A': ['4', '@', '/'],
  'B': ['|3','8'],
  'C': ['(', '['],
  'D': ['|)', ')'],
  'E': ['3',],
  'F': ['|=', 'ph', '/='], 
  'G': ['6', '9', '[,'],
  'H': ['#', '|-|', '9#'],
  'I': ['1', '!', '|'],
  'J': ['_|', '_/'],
  'K': ['X'],
  'L': ['1', '|'],
  'M': ['|v|', 'AA', '|/|'],
  'N': ['||', '^/'],
  'O': ['0', '()', '[]'],
  'P': ['|*', '|o'],
  'Q': ['(_,)', '()_'],
  'R': ['|2', '12'],
  'S': ['5', '$'],
  'T': ['7', '+'],
  'U': ['(_)', '|_|'],
  'V': ['/', '|/'],
  'W': ['//', 'vv', 'uu'],
  'X': ['}{'],
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

let rot = {};
rot.rot_ch = {
  'A': 'ᗄ', 'B': 'ᗺ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ᖵ', 'G': '⅁',
  'H': 'H', 'I': 'I', 'J': 'ᒋ', 'K': '丬', 'L': 'ᒣ', 'M': 'W', 'N': 'N',
  'O': 'O', 'P': 'd', 'Q': 'Ό', 'R': 'ᖈ', 'S': 'S', 'T': '⊥', 'U': 'ᑎ',
  'V': 'ᐱ', 'W': 'M', 'X': 'X', 'Y': '⅄', 'Z': 'Z',
  'a': 'ɐ', 'b': 'q', 'c': 'ↄ', 'd': 'p', 'e': 'ə', 'f': 'ɟ', 'g': 'ᵷ',
  'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ', 'k': 'ʞ', 'l': 'l', 'm': 'ա', 'n': 'u',
  'o': 'o', 'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ', 'u': 'n',
  'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ', 'z': 'z',
  '0': '0', '1': '⇂', '2': 'ᘔ', '3': 'ε', '4': '߈', '5': 'S', '6': '9', '7': 'L', '8': '8', '9': '6',
  '.': '˙', ',': '‘', ';': '؛', '!': '¡', '?': '¿', '&': '⅋',
};


let ligature = {};
ligature.ligature_ch = [
  0x035c, 0x0318, 0x0323, 0x0354, 0x0359, 0x034e, 0x031c, 0x032b, 0x0317,
  0x034d, 0x035a, 0x0353, 0x035e, 0x031f, 0x0324, 0x0316, 0x0356, 0x0347,
  0x030d, 0x034b, 0x0300, 0x0346, 0x0313, 0x0305, 0x034a];

let deco_char = {};
deco_char.ch = [
  0x0337, 0x0338, 
]


function str_to_leet(str) {
  let leet_str = "";
  for( let ch of str ) {
    let rand = Math.random() * 100;
    if( rand > 70 ){
      leet_str += to_leet(ch);
    }
    else{
      leet_str += ch;
    }
  }
  return leet_str;
}

function to_leet(ch) {
  ch = ch.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
      return String.fromCharCode(s.charCodeAt(0) - 65248);
      });
  let ch_upper = ch.toUpperCase();
  if(ch_upper in leet.leet_ch){
    return leet.leet_ch[ch_upper][Math.floor(Math.random() * leet.leet_ch[ch_upper].length)];
  } else{
    return ch;
  }
}

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


function str_to_ligature(str) {
  let ligature_str = "";
  for( let ch of str ) {
    let rand = Math.random() * 100;
    if( rand > 50 ){
      if(check_half_alphnum(ch)) {
        ligature_str += String.fromCodePoint(ch.charCodeAt(), get_ligature_random());
      }
      else {
        /*
        ligature_str += ch;
        ligature_str += String.fromCodePoint(0x020, get_ligature_random());
        */
        ligature_str += String.fromCodePoint(ch.charCodeAt(), get_ligature_random());
      }
    }
    else{
      ligature_str += ch;
    }
  }
  return ligature_str;
}

/* japanese ==> 1,6,13,14,20,23 */
function get_ligature(num) {
    return ligature.ligature_ch[num];
}

function get_ligature_random() {
    return ligature.ligature_ch[Math.floor(Math.random() * ligature.ligature_ch.length)];
}

function ligature_test(ch) {
  let str = "";
  let ch_code = ch.charCodeAt();
  for( let i in ligature.ligature_ch ) {
    str += String.fromCodePoint(ch_code, ligature.ligature_ch[i]); 
  }
  return str;
}

function check_half_alphnum(ch){
  ch = (ch==null)?"":ch;
  if(ch.match(/^[A-Za-z0-9]*$/)){
    return true;
  }else{
    return false;
  }
}
