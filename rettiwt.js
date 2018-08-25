let str_ = "た͜͜͏̘̣͔͙͎͎̘̜̫̗͍͚͓͜͜͏̘̣͔͙͎͎す͜͜͏̘̣͔͙͎͎ơ̟̤̖̗͖͇̍͋̀͆̓́͞͡け̜ͪ̅̍̅͂͊て";
let char1 = "た͜͜͏̘̣͔͙͎͎̘̜̫̗͍͚͓͜͜͏̘̣͔͙͎͎";
document.write(str_);
document.write(char1.charCodeAt(0));
document.write(String.fromCodePoint(0x40));
document.write(String.fromCodePoint(0x61, 0x0359, 0x0359));
document.write(String.fromCodePoint(97, 0x0359, 0x0359));
document.write(String.fromCodePoint(97, 363, 363));
document.write("a".codePointAt());
let str = "This tweet is test.";
document.write("<br>");
document.write(str);
for( let ch of str) {
  //document.write(ch);
  //document.write(ch.codePointAt());
  document.write(String.fromCodePoint(ch.codePointAt(), 0x0359));
  //document.write("<br>");

};

function to_leet() {

}
