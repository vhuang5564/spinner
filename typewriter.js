const sentence = "hello there from lighthouse labs";

const lighthouseSentence = sentence => {
  let n = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, n = n + 50);
  }
};

lighthouseSentence(sentence + '\n');
