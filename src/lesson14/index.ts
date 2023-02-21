// Tuple: khai bao so phan tu va kieu du lieu moi phan tu
let myTuple: [string, number, boolean] = ['Karen', 100, true]
let mixed = ['Rayleigh', 99, false]

// Gan loi boi vi mixed co the co so phan tu it hon ne ts khong chap nhan
// myTuple = mixed

// Tuy nhien neu ta ep kieu cho mixed thanh [string, number, boolean] bang 'as' thi co the gan duoc

console.log(mixed)
mixed = myTuple // Right
console.log(mixed)

// Khong the gan sai type cho tuple
// myTuple[2] = 'Duy'
