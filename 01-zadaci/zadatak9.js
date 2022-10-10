prvi = { a: 1, b: 2, c: 3 };
drugi = { a: 321, b: 3, c: 1 };

function OBJCompare(prvi, drugi) {
  for (var obj1 in prvi) {
    for (var obj2 in drugi) {
      if (obj1.a == obj2.a || obj1.b == obj2.b || obj3.c == obj3.c) {
        return true;
      }
    }
  }
  return false;
}

OBJCompare(prvi, drugi);
