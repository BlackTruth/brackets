module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");
    let stack = [];
    for (let symbol of arr) {
        if (isOpenBracket(symbol, stack[stack.length - 1], bracketsConfig)) {
            stack.push(symbol);
        } else if (!checkBrackets(stack.pop(), symbol, bracketsConfig))
            return false;
    }
    return stack.length == 0;
};

function checkBrackets(bracketOpen, bracketClose, bracketsConfig) {
    for (let elem of bracketsConfig) {
        if (bracketOpen == elem[0] && bracketClose == elem[1]) return true;
    }
    return false;
}

function isOpenBracket(bracket, prevBracket, bracketsConfig) {
    for (let elem of bracketsConfig) {
        if (elem[0] == bracket && elem[0] != elem[1]) return true;
        if (elem[0] == bracket && elem[0] == elem[1] && bracket != prevBracket)
            return true;
    }
    return false;
}
