const ajax = new XMLHttpRequest();
ajax.open("GET", "https://jsonplaceholder.typicode.com/posts");
ajax.send();
ajax.onload = function () {
  if (ajax.status === 200) {
    const hasil = JSON.parse(ajax.responseText);
    console.log(hasil);
  } else {
    console.log("ada error bro...");
  }
};

function getPost(method, url, callback) {
  const ajax = new XMLHttpRequest();
  ajax.open(method, url);
  ajax.send();
  ajax.onload = function () {
    if (ajax.status === 200) {
      const hasil = JSON.parse(ajax.responseText);
      // return hasil
      callback(null, hasil);
    } else {
      callback("terjadi error bro...", null);
    }
  };
}

getPost(
  "GET",
  "https://jsonplaceholder.typicode.com/postsss",
  (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    result.map((item) => {
      console.log(item.title);
    });
  }
);
