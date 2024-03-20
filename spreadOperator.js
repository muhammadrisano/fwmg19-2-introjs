// spread untuk array

const hobies = ['ngoding', 'joging', 'gaming']

const newHobies = ['swimming', 'reading', ...hobies]


// menggabungkan 2 nilai array

const makananFavorit1 = ['bakso', 'pangsit', 'somay']

const makananFavorit2 = ['nasi goreng', 'nasi kuning', 'nasi uduk']

const allFavorit = [...makananFavorit2, ...makananFavorit1]

// console.log(allFavorit);

// mengcopy / clone object


// const biodata = {
//   nameLengkap: 'risano',
//   email: 'risano@gmail.com',
//   city: 'padang',
// }


// const newBiodata = biodata
// const newBiodata = {...biodata}


// newBiodata.email = 'risanoakbar@gmail.com'
// newBiodata.city = 'pekanbaru'

// console.log(newBiodata);

// console.log(biodata);



const biodata = {
  nameLengkap: 'risano',
  email: 'risano@gmail.com',
  city: 'padang',
}

const newBidata = {
  nameLengkap: 'risano akbar',
  city: 'pekanbaru',
  isMerried: false,
  jender: 'laki-laki'
}

const myBiodata = {
  ...biodata,
  ...newBidata
}

console.log(myBiodata);