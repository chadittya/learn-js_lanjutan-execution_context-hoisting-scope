// 1. EXECUTION CONTEXT-HOISTING-SCOPE
console.log(nama);
var nama = `galih`;
// yang dilakukan code diatas adalah
// creation phase pada Global Context
// JS mencari var dan fn() lalu ditarik ke atas terlebih dahulu
// nama var ditarik ketas dan dikasih value undefined
// sedangkan fn() diisi dengan isi function() itu sendiri
// method ini dinamakan hoisting

// js juga mendefinisikan window sebagai global object
// js juga menefinisikan this = window
// hal ini dinamakan creation phase

// untuk execution phase
// saat kita mengexecusi code

console.log(sayHello()); //jika clg ditulis disini maka function tidak akan kena masalah, namun var yang akan bermasalah

var nama2 = `galih`;
var umur = 30;

function sayHello() {
  return `Hallo, nama saya ${nama2}, saya umur ${umur} tahun`;
}

// fn() membuat local execution context
// yang di dalamnya terdapat creation dan execution phase
// bisa akses window
// bisa juga akses ke arguments
// yang didalamnya juga ada hoisting local

var nama3 = `galih arizza`;
var username = `galiharizza`;

function cekURL(username) {
  var instagramURL = `http://instagram.com/`;
  return instagramURL + username;
}

console.log(cekURL(username));

//case selanjutnya funsi dalam fungsi
function a() {
  console.log(`ini a`);
  function b() {
    console.log(`ini b`);
    function c() {
      console.log(`ini c`);
    }
    c();
  }
  b();
}
a();
