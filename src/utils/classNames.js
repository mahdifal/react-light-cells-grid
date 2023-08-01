function classNames(...args) {
  const classes = [];

  args.forEach((arg) => {
    if (typeof arg === "string") {
      classes.push(arg);
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
    } else if (typeof arg === "object" && arg !== null) {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key);
        }
      });
    } else if (arg) {
      classes.push(arg.toString());
    }
  });

  return classes.join(" ");
}

// Test examples
console.log(classNames("foo", "bar"));
console.log(classNames("foo", { bar: true }));
console.log(classNames({ "foo-bar": true }));
console.log(classNames({ "foo-bar": false }));
console.log(classNames({ foo: true }, { bar: true }));
console.log(classNames({ foo: true, bar: true }));
console.log(classNames({ foo: true, bar: false, qux: true }));
console.log(classNames("a", ["b", { c: true, d: false }]));
console.log(
  classNames("foo", { bar: true, duck: false }, "baz", { quux: true })
);
console.log(classNames(null, false, "bar", 0, undefined, { baz: null }, 1, ""));
