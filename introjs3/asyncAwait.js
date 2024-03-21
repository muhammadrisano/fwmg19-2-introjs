const penjumlahan = (val1, val2)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if( typeof(val1) !==  'number' || typeof(val2) !== 'number'){
        reject('parameter harus number')
        return
      }
      const result = val1 + val2
      resolve(result)
    }, 1000)
  })
}


const startAPP = async()=>{
  try {
    console.log('perintah 1');
    const result = await penjumlahan(8, 'dua')
    const total = await penjumlahan(result, 100)
    console.log(total);
    console.log('perintah 3');
  } catch (err) {
    console.log(err);
    
  }
  // } finally{
  //   console.log('function selesai');
  // }

}

startAPP()


// const cobaJalankan = ()=>{
//   try {
//     const name = "risano"
//     name = "budi"
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// cobaJalankan()