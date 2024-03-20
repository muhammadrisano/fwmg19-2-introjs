// const myBidata = {
//   nameLengkap: 'risano akbar',
//   city: 'pekanbaru',
//   isMerried: false,
//   jender: 'laki-laki',
//   alamat : {
//     namaJalan: 'jl. kemana saja no 12 padang',
//     kelurahan: 'jati',
//     kecamatan: 'padang timur',
//     provinsi: 'sumatera barat'
//   }
// }

// const namaLengkap = myBidata.nameLengkap
// const city = myBidata.city
// const jender = myBidata.jender


// const city = "jakarta"

// const {nameLengkap, jender, city: myCity} = myBidata

// console.log(myCity);

// const {namaJalan, provinsi} = myBidata.alamat

// console.log(provinsi);

// const {nameLengkap} = biodata

// const {namaJalan} = biodata.alamat

// const {nameLengkap, alamat: {namaJalan}} = myBidata

// console.log(namaJalan);


// destructuring untuk array

const rgb = [200, 140, 75]

// const red = rgb[0]
// const green = rgb[1]
// const blue = rgb[2]

// console.log(blue);
const [red, green, blue] = rgb

console.log(blue);