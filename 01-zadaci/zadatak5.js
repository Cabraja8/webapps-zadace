var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function brojeviDijeljiviS3() {
  for (let i of arr) {
    if (i % 3 == 0) {
      console.log("Brojevi dijeljivi s 3 " + i);
    }
  }
}
brojeviDijeljiviS3();
