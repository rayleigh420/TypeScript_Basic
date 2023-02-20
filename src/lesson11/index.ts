// Type Assertion
// Với loại dữ liệu này ta cho typescript biết nên tin chúng ta hoàn toàn và bỏ qua cảnh báo
// Hãy xet ví dụ.

type One = string
type Two = string | number

// convert
let aV: One = 'Karen';
let bV = aV

// Khong dung the nay trong reactjs
let cV = <string | number>3
let dV = <One>'World'

const stringOrNumber = (option: 'string' | 'number'): string | number => {
    if (option == 'number') {
        return 10
    } else {
        return "Karen"
    }
}

// Neu khong gan kieu cho val thi ts se tu xac dinh
let val = stringOrNumber('string')

// Neu gan kieu
// let myVal: string = stringOrNumber('string') // se loi ngay
// Tuy nhien ta biet stringOrNumber('string') se khong bao gio tra ra kieu number
// Nen ta co the cho ts biet de bo qua canh bao. Va de ts tin chung ta thi chung ta su dung
let myVal: string = stringOrNumber('string') as string
let nextVal: number = stringOrNumber('number') as number

// Tuy nhien vi ts tin chung ta nen neu chung ta sai thi ts cung se sai
let errVal: number = stringOrNumber('string') as number // Loi nhung ts se khong nhac

// Nhung co mot so loi don gian ts van bat
// let a = 10 as string // Vo ly nen ts se bat
// Do do can Double Cast
let unknownA = (10 as unknown) as string
console.log(unknownA)

// Note su dung type assertion trong DOM JS