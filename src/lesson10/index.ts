// Never type
const createError = (errMsg: string) => {
    throw new Error(errMsg)
}

// Infinity loop
const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;
    }
}

// Never khong nhan bat cu gia tri nao
let a: never;
// a = 1 // Error
// a = null // Error
// a = undefined // Error