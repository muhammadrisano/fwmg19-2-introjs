// function declaration
const nama = "risano"

function sayHelo(name, age = 20){
  console.log(`helo ${name}, apa kabar, umur saya adalah ${age}`);
}

sayHelo(nama)

function penjumlahan(...res){
  let result = 0
  for(let i = 0; i< res.length; i++){
    if(typeof(res[i]) !== 'number'){
      return 'semua prarameter harus namber'
    }
    result = result + res[i]
  }
  return result
  // const result = val1 + val2 + val3 + val4 + val5
  // return result
}

// 1 untuk memjumlahkan nilai = 10, 20, 30 ,14, 11
// 2 untuk menjumlahkan nilai = 11, 31, 25 ,11, 30
const hasil1 = penjumlahan(10, 20, 30 ,14, 'dua')
const hasil2 = penjumlahan(11, 31, 25 ,11, 30, 10)
// console.log(hasil1);
// const hasil1 = 10 + 20 + 30 + 14 +  11


// expression

const perkalian = function(val1, val2){
  const result = val1 * val2
  return result
}

const hasilPerkalian = perkalian(4, 6)
const hasilPersen = hasilPerkalian / 100
console.log(hasilPersen);


// arrow function

const pembagian = (val1, val2) => val1 / val2


const hasilPembagian =  pembagian(81, 10)

console.log(hasilPembagian);