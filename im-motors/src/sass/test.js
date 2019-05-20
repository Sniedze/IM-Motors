function foo(a) {
  return function(b) {
    a += b;
    return a;
  };
}
var x = foo(5);
console.log(x(5));
console.log(x(1));
