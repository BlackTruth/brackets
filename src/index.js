module.exports = function check(str, bracketsConfig) {
    let stack = [];
    for (let symbol of str.split("")) {
        let last = stack.pop();
        if (!isPair(symbol, last, bracketsConfig)) {
            if (last) stack.push(last);
            stack.push(symbol);
        }
    }
    return stack.length == 0;
};

function isPair(bracket, prevBracket, bracketsConfig) {
    for (let elem of bracketsConfig) {
        if (elem[0] == prevBracket && elem[1] == bracket) return true;
    }
    return false;
}
