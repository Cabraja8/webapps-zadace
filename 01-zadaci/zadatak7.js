function visekratnik(broj) {
  if (broj > 0 || broj < 1000) {
    var pod = broj / 7;
    pod = Math.trunc(pod);

    var sp = 7 * pod;
    var rez = 0;
    arr = [];
    for (let i = 1; i <= sp; i++) {
      if (i % 7 == 0) {
        rez = i;
        arr.push(i);
        for (let array of arr) {
          rez = i * 7;
        }
      }
    }
    console.log(rez);
  } else {
    console.log("broj nije u rasponu");
  }
}

visekratnik(23);
