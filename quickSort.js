const a = [3, 8, 9, 11, 6, 2, 1, 7];

const qs = a => {
  if (a.length <= 1) return a;
  const p = a.pop();
  const l = [];
  const r = [];

  //  for (let i = 0; i < a.length - 1; i++) {
  //    if (a[i] < p) {
  //      l.push(a[i]);
  //    } else {
  //      r.push(a[i]);
  //    }
  //  }

  a.forEach(i => {
    if (i < p) {
      l.push(i);
    } else {
      r.push(i);
    }
  });

  return [...qs(l).concat(p, ...qs(r))];
};

console.log(qs(a));
