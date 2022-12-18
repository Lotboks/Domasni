function diffTypes(whatTypes) {
    let par = typeof whatTypes;
    return par;
}

console.log(diffTypes({ a: 1 }));
console.log(diffTypes(true));
console.log(diffTypes(32));
console.log(diffTypes("DJ Khaled"));
console.log(diffTypes(undefined));