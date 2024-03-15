// reverse a string
var str=
"abc"
// const newste=str.split('').reverse().join('')
// console.log('%calogorithms\algo.js:6 object', 'color: #007acc;', newste);
var newstr=''
for (let index = str.length-1; index >= 0; --index) {
    const element = str[index];
    newstr+=element
    
}
console.log('%calogorithms\algo.js:13 object', 'color: #007acc;', newstr);
// for (let index = 0; index < str.length; index++) {
//     const element = str[index];
//     newstr=element+newstr
    // newstr=a 1
    // newste=l+a 2
    // newste=+i+l+a 3
    // and so on
    
// }
// console.log('%calogorithms\algo.js:13 newstr', 'color: #007acc;', newstr);