const getPost = (method, url) => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();
    ajax.open(method, url);
    ajax.send();
    ajax.onload = function () {
      if (ajax.status === 200) {
        const hasil = JSON.parse(ajax.responseText);
        resolve(hasil);
      } else {
        const err = "ada error bro...";
        reject(err);
      }
    };
  });
};

// getPost('GET', 'https://jsonplaceholder.typicode.com/postsssz')
// .then((res)=>{
//   res.map((item)=>{
//     console.log(item.title);
//   })
// })
// .catch((err)=>{
//   console.log(err);
// })

// const penjumlahan = (val1, val2)=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if( typeof(val1) !==  'number' || typeof(val2) !== 'number'){
//         reject('parameter harus number')
//         return
//       }
//       const result = val1 + val2
//       resolve(result)
//     }, 2000)
//   })
// }

const startApp = async () => {
  try {
    const resultPost = await getPost(
      "GET",
      "https://jsonplaceholder.typicode.com/postss"
    );
    resultPost.map((item) => {
      console.log(item.title);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
