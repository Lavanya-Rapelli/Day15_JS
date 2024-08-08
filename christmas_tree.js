// Christmas Tree

let n = 5;
for (let line = 1; line < n; line++) {
    let output = '';
    for (let space = 1; space < n - line; space++) {
        output += '  ';
    }
    for (let star = 1; star < 2 * line; star++) {
        output += '* ';
    }
    console.log(output);
}
let spaces = '';
for (let i = 1; i < n - 1; i++) {
    spaces += ' ';
}
console.log(spaces + '   '+'|');
