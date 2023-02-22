const total = (a: number, ...rest: number[]) => {
    console.log(rest)
    return a + rest.reduce((prev, curr) => prev + curr)
}

console.log(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const concatNumberAndString = (...rest: (number | string)[]) => {
    console.log(rest)
    return rest.reduce((prev, curr) => "" + prev + curr)
}

console.log(concatNumberAndString('Hello ', "Every One", 69, 96))