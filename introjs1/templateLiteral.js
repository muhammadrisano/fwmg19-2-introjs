// const text = "selamat pagi,\nbudi apakabar?"
// const text = `Selamat Pagi,
// budi apakabar?`

// console.log(text);



/* 
nilai IPA saya = 80
nilai IPS saya = 90
rata-rata dari kedua nilai saya adalah 85
*/

const IPA = 80
const IPS = 90

// concat
const text = "nilai IPA saya = "+IPA +
'\nnilai IPS saya = '+ IPS +
'\nrata-rata dari kedua nilai saya adalah '+ ((IPA + IPS) / 2)

// template literal
const text2 = `nilai IPA saya = ${IPA}
nilai IPS saya = ${IPS}
rata-rata dari kedua nilai saya adalah ${(IPA + IPS) / 2}`

console.log(text);
console.log(text2);
