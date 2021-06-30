const spinny = () => {

  let revs = 0;
  const spinnyThing = ['|', '/', '-', '\\','|', '/', '-', '\\', '|', '/', '-', '\\' ];
  spinnyThing.forEach(spins => {
    setTimeout(() => {
      process.stdout.write('\r' + spins);
    }, revs = revs + 200);
  });
};

spinny();