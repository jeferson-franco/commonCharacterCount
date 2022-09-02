function solution(s1, s2) {
    let count = 0;
    s1 = s1.split('');
    s2 = s2.split('');
    s1.forEach((e) => {
        if (s2.includes(e)) {
            count++;
            s2.splice(s2.indexOf(e), 1);
        }
    });
    return count;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test commonCharacterCount

// alternative solution
// function solution(s1, s2) {
//     for (let i = 0; i < s1.length; i++) {
//         s2 = s2.replace(s1[i], "!");
//     }
//     return s2.replace(/[^!]/g, "").length;
// }

// alternative solution
// function solution(s1, s2) {
//     let a = s1.split(''),
//         r = 0;
//     while (a.length) {
//         let t = a.pop();
//         if (s2.includes(t)) {
//             r++;
//             s2 = s2.replace(t, '');
//         }
//     }
//     return r;
// }
