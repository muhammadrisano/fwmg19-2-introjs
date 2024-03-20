// const hobies = ['ngoding', 'jodging', 'gaming']
// console.log(hobies);





// sort -> untuk mensorting sebuah nilai

const myNilai = [9, 2, 4, 8, 7, 30]

const sortNilai = myNilai.sort((a, b)=> b - a)
// console.log(sortNilai);


// map -> untuk melopping nilai dengan tipe data array

// const hobies = ['ngoding', 'jodging', 'gaming', 'swimming']

// console.log(hobies.length);

// for(let i = 0; i<hobies.length; i++){
//   console.log(`${i}. ${hobies[i]}`);
// }

// hobies.forEach((item, i)=>{
//   console.log(`${i + 1}. ${item}`);
// })

// hobies.map((item, i)=>{
//   console.log(`${i + 1}. ${item}`);
// })


// const hobiesx = hobies.map((item, i)=>{
//   return `${item}x`
// })

// console.log(hobies);
// console.log(hobiesx);

const text = "saya ingin menjadi programmer"

const resultText = text.split(" ").reverse().join(' ')
// const resultReverce = resultText.reverse()
// const result = resultReverce.join(' ')

console.log(resultText);
const hobies = ['ngoding', 'jodging', 'gaming', 'swimming']

// const resultHobies = hobies.join(', ')

// console.log(resultHobies);