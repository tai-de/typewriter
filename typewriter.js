const sentence = "hello there from lighthouse labs";
const newSentence = sentence + "\n";

let delay = 0;

for (const char of newSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}