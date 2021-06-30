const spinny = () => {

  let revs = 0;
  const spinnyThing = ['|', '/', '-', '\\','|', '/', '-', '\\', '|', '/', '-', '\\' ]; // goes through each array. added backslash to backslash syntax.
  spinnyThing.forEach(spins => {
    setTimeout(() => {
      process.stdout.write('\r' + spins); // \r will delete spins
    }, revs = revs + 200); // duration of spins
  });
};

spinny();