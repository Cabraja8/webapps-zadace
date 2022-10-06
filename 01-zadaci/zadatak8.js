polje = [3, 4, 5, 6];
novoPolje = [];

function ReversePolje(polje) {
  for (let i of polje) {
    novoPolje.unshift(i);
  }
  for (let p of novoPolje) {
    console.log(p);
  }
}
ReversePolje(polje);
