const spinIcons = ["|", "/", "-", "\\"];
let delay = 100;
for (let i = 0; i < 9; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinIcons[i % 4]}   `);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, delay);
