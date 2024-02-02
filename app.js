let s = +prompt("tamin sayinizi giriniz");
let t = Math.round(Math.random() * 100);
console.log(t);
for (i = 1; i <= s; i++) {
  let a = +prompt("sayi giriniz");
  if (i === s) {
    alert("maalesef oyun bitti");
    break;
  } else if (a === t) {
    alert("tebrikler");
    break;
  } else if (a < t) {
    alert(`yukseltiniz. ${s - i} hakkiniz kaldi`);
  } else if (a > t) {
    alert(`dusurunuz. ${s - i} hakkiniz kaldi`);
  }
}