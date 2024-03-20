const biodata = {
  name : 'risano',
  city: 'padang',
  sayHelo: function(namaTeman){
    console.log(`helo ${namaTeman}, apakabar !, nama saya adalah ${this.name}`);
  },
  sayBro(namaTeman){
    console.log(`helo ${namaTeman}, apakabar !, nama saya adalah ${this.name}`);
  },
  saySist:(namaTeman, umur)=>{
    console.log(`helo ${namaTeman}, apakabar !, nama saya adalah ${biodata.name}, dan umur saya ${umur}`);
  }

}

// biodata.saySist('budi', 17)




class Person{
  constructor(nama){
    this.name = nama
  }
  name = ''

  sayHelo(){
    console.log(`helo ${this.name}, apakabar !`);
  }
}

const risano = new Person('risano')
risano.sayHelo()
