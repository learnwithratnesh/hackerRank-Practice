function superReducedString(s) {
    let str = s.split('')
    var done = false;
    // while (!done) {
    //     done = true;
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] == str[i]) {
            done = false;
            str.splice(i - 1, 2)
        }
    }
    // }
    return str.length > 0 ? str.join('') : 'Empty String';
    // Write your code here

}

console.log(superReducedString('aa'));