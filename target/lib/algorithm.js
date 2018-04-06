"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colour = () => {
    let colourCode;
    const number = Math.random();
    if (number <= 0.19 && number > 0)
        return colourCode = 'green';
    else if (number <= 0.47 && number > 0.19)
        return colourCode = 'yellow';
    else if (number <= 1 && number > 0.47)
        return colourCode = 'red';
    return colourCode;
};
exports.group = [];
exports.filterByColour = (batch) => {
    let code = exports.colour();
    console.log(code);
    return batch.students.map(student => student.evaluations
        .sort()
        .slice(-1)
        .map(a => a.colourCode)[0]
        .includes(code)
        ? exports.group.concat(student)
        : null);
};
exports.random = (batch) => {
    return exports.filterByColour(batch).filter(function (n) { return n != undefined; })[Math.floor(Math.random() * exports.filterByColour(batch).filter(function (n) { return n != undefined; }).length)];
};
const total = (batch) => {
    return batch.students.map(student => student.evaluations
        .sort()
        .slice(-1)
        .map(a => a.colourCode)[0]);
};
exports.redP = (batch) => {
    return total(batch).filter(a => a.length === 3).length / total(batch).length;
};
exports.yellowP = (batch) => {
    return total(batch).filter(a => a.length === 6).length / total(batch).length;
};
exports.greenP = (batch) => {
    return total(batch).filter(a => a.length === 5).length / total(batch).length;
};
//# sourceMappingURL=algorithm.js.map