// reverse a string
// var str=
// "abc"
// const newste=str.split('').reverse().join('')
// console.log('%calogorithms\algo.js:6 object', 'color: #007acc;', newste);
// var newstr=''
// for (let index = str.length-1; index >= 0; --index) {
//     const element = str[index];
//     newstr+=element

// }
// console.log('%calogorithms\algo.js:13 object', 'color: #007acc;', newstr);
// for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     newstr=element+newstr
// newstr=a 1
// newste=l+a 2
// newste=+i+l+a 3
// and so on

// }
// console.log('%calogorithms\algo.js:13 newstr', 'color: #007acc;', newstr);

// chaeck palindrome

// var pal = "madamtest";
// var copy = pal.split("").reverse().join("");
// if (pal === copy) {
//   console.log("%calogorithmsalgo.js:29 ", "color: #007acc;", true);
// } else {
//   console.log("%calogorithmsalgo.js:32 false", "color: #007acc;", false);
// }

// function checkpal() {
//   var checkpalindrome = "maadamm";
//   var plength = checkpalindrome.length;

//   for (let index = 0; index < checkpalindrome.length; index++) {
//     const start = checkpalindrome[index];
//     const end = checkpalindrome[checkpalindrome.length - 1];
//     if (start === end) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(
//   "%calogorithmsalgo.js:49 checkpal()",
//   "color: #007acc;",
//   checkpal()
// );

// const charMap = {};
// var str = "aabbccddeeeff";
// for (const char of str) {
//   if (charMap[char]) {
//     charMap[char] = charMap[char] + 1;
//   } else {
//     charMap[char] = 1;
//   }
// }

// find max character and count all character in the string

// var str = "sdsadsdervetbrbbbbbbdsfdsvf";
// var max = 0;
// var findstr = "";

// var strmap = {};
// for (const char of str) {
//   if (strmap[char]) {
//     strmap[char] = strmap[char] + 1;
//   } else {
//     strmap[char] = 1;
//   }
// }
// for (let key in strmap) {
//   if(strmap[key]>max){
//     max=strmap[key]
//     findstr=key
//   }
// }
// console.log('%calogorithms\algo.js:83 findstr', 'color: #007acc;', findstr,max);

function arra(chunk, size) {
  var newarr = [];
  var index = 0;
  while (index < chunk.length) {
    newarr.push(chunk.slice(index, index + size));
    index += size;
  }
  console.log("%calogorithmsalgo.js:94 newarr", "color: #007acc;", newarr);

  // for (let index = 0; index < chunk.length; index+size) {
  //     const element = chunk[index];
  //   const newel=  chunk.slice(index,size)
  //   console.log('%calogorithms\algo.js:90 newel', 'color: #007acc;', newel);

  // }
}
arra([1, 2, 3, 4, 5], 2);
