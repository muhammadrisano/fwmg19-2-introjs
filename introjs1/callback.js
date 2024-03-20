// langkah 1

// const sayHelo = ()=>{
//   console.log('helo bro.. apakabar');
// }

// const sayBro = sayHelo

// sayBro()

// langkah 2

// const printNilai = (hasil) =>{
//   console.log(`hasil adalah ${hasil}`);
// }

// const penjumlahan = (val1, val2)=>{
//   const result = val1 + val2
//   printNilai(result)
// }

// penjumlahan(10,20)

// langkah 3

const printNilai = (hasil) =>{
  console.log(`hasil adalah ${hasil}`);
}

const penjumlahan = (val1, val2, callback)=>{
  const result = val1 + val2
  callback(result)
}

// eksekusi
const hasil = penjumlahan(10, 20, (result)=>{
  console.log(`hasil dari penjumlahan = ${result}`);
})
penjumlahan(10, 20, printNilai)