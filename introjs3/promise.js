// const janji = (ditunaikan) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (ditunaikan) {
//         const result = "janji ditunaikan";
//         resolve(result);
//       } else {
//         const err = "janji tidak ditepati";
//         reject(err);
//       }
//     }, 2000);
//   });
// };

// const result = janji(false);

// result
//   .then((res) => {
//     console.log('then di jalankan');
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('catch dijalankan');
//     console.log(err);
//   });


const penjumlahan = (val1, val2)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if( typeof(val1) !==  'number' || typeof(val2) !== 'number'){
        reject('parameter harus number')
        return
      }
      const result = val1 + val2
      resolve(result)
    }, 2000)
  })
}

const hasilPenjumlahan = penjumlahan(10, 12)

// hasilPenjumlahan.then((res)=>{
//   console.log(res);
// })

penjumlahan(10, 'abc')
.then((res)=>{
  console.log('then dijalankan');
  console.log(res);
})
.catch((err)=>{
  console.log('catch dijalankan');
  console.log(err);
})