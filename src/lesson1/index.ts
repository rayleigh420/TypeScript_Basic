const age: number = 1;
console.log(age)

// Thuc te khong can gan kieu cho ham tra ve
const sum = (a: number, b: number): number => {
    return a + b;
}

// Async Await and destructuring
const fetchData = async ({ user, email, password }: {
    user: string,
    email: string,
    password: string
}) => {
    let res = await fetch('localhost:3000');
    return res
}

// Neu ham khong return gi thi kieu tra ve se la voi

// Callback
const waitAndDo = (callback: (param: string) => void) => {
    return setTimeout(() => {
        callback('Opps');
    }, 1000)
}

// Truyen call back vao funtion
waitAndDo((param) => {
    console.log(param)
})

// const cb = (param: number) => {
//     console.log(param)
// }
//waitAndDo(cb) // Loi ngay