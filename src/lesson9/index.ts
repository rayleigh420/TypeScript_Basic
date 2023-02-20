// Type Aliases
type stringOrNumberOrBigInt = string | number | BigInt

const function1 = (value: stringOrNumberOrBigInt) => {
    console.log("Function 1: ", value)
}
const function2 = (value: stringOrNumberOrBigInt) => {
    console.log("Function 2: ", value)
}

console.log(function1(1))
console.log(function1("Karen"))
console.log(function2(2))
console.log(function2("Black"))