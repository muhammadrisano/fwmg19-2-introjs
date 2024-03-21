const penjumlahan =(val1, val2, cb)=>{
   setTimeout(()=>{
    const result = val1 + val2
    cb(result)
  }, 2000)
}

const perkalian =(val1, val2, cb)=>{
  setTimeout(()=>{
   const result = val1 * val2
   cb(result)
 }, 2000)
}

const myCallback = (result)=>{
  const hasil = result / 10
  // console.log(hasil);
}

const hasiPenjumlahan = penjumlahan(10, 15, (result)=>{
  const hasilPenjumlahan = result
  perkalian(hasilPenjumlahan, 100,(hasil)=>{
    const hasilPerkalian = hasil
    console.log(hasilPerkalian);
  })
})

