const repeatString = (str, count) => {
    let result = '';
    if (count == -1) {
        return "ERROR"
    } if (str == '') {
        return ""
    }
    
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}
repeatString('hey', 3)
repeatString('hello', 10)
repeatString('hi', 1)
repeatString('bye', 0)
repeatString('goodbye', -1)

// Do not edit below this line
module.exports = repeatString;
