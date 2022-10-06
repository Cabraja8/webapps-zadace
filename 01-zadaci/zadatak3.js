function RasponBrojeva(X) {
  if (X < 100 || X > 150000) {
    return X + " " + "nije unutar [100,150000]";
  } else {
    return X + " " + " se nalazi";
  }
}

console.log(RasponBrojeva(53));
