//if else statement
function testNum(a) {
  let result;
  if (a > 0) {
    // jika a lebih dari 0 maka hasilnya positif jika minus maka not positif
    result = "suka";
  } else {
    result = "tidak suka";
  }
  return result;
}
//disini diisi dengan (1) dan hasil outputnya adalah suka
//jika diisi minus maka hasilnya tidak suka
document.getElementById("demo").innerHTML = testNum(1);

//nested if
function testAge(age) {
  if (age < 18) {
    result = "kamu jelek <br> dia gasuka kamu"; // jika umurnya kurang dari 18
  } else {
    if (age >= 18 && age <= 60) {
      result = "kamu ganteng dan kaya <br> dia suka sama kamu "; //jika umurnya lebih dari 18 dam kuramg dari 60
    } else {
      result = "kamu terlalu baik <br> kita temenan aja yaa!!"; //jika umurnya lebih dari 60
    }
  }
  return result;
}
document.getElementById("demo2").innerHTML = testAge(20); // hasilnya jika umurnya 20 tahun

//switchcase
function yourHead(me) {
  switch (me) {
    case "pacar":
      result = "saya punya pacar"; //case pertama
      break;
    case "uang":
      result = "saya punya uang"; // case kedua
      break;
    default:
      result = "saya tidak punya pacar dan uang"; // case jika tidak terisi maka mengembalikan deafult
      break;
  }
  return result;
}
document.getElementById("demo3").innerHTML = yourHead("pacar"); // hasilnya jika saya memilih pacar

// for statement (loop)

const mapel = ["html", "javascript", "css", "laravel"];
let i = 2; //mengambil mapel dari nilai 2 yaitu css
let len = mapel.length;
let matkul = "";
for (; i < len; ) {
  matkul += mapel[i + ""] + "<br>";
  i++; // i akan start dari 2 dan akhir dari mapel
}
document.getElementById("demo4").innerHTML = matkul; //result dari statement

//while
const pacar = ["nadia", "hawa", "siska", "suci"];
let text = "";
let j = 0; // j dimulai dari 0
while (j < pacar.length) {
  text += pacar[j] + "<br>";
  j++; //j akan bertambah hingga pacar selesai
}
document.getElementById("demo5").innerHTML = text; // result dari while

//do while
let clas = "";
let f = 0; //f dimulai dari 0 hingga meloop whle sampai angka 5
do {
  clas += f + "<br>";
  f++;
} while (f < 10); //ini adalah yang di loop oleh f
document.getElementById("demo6").innerHTML = clas;

//function
const myFunction = new Function("a", "b", "return a - b"); // function merubah objek a & b kemudian mereturn dalam bentuk yang telah ditentukan
document.getElementById("demo7").innerHTML = myFunction(4, 3); // hasil dari 4-3
