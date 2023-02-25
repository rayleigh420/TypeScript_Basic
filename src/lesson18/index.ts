// Utility Type (continues)

// Partial: bien toan bo type thanh optional het    // Thuong dung de update khi chi can update mot vai field cua bien
// Required: bien taon bo type thanh required het   
// Readony: thi ta lam cho bat cu bien nao co kieu du lieu do khong the gan hay chinh sua
// Record: tao ra mot type moi voi moi type o key truyen vao se co day du type o key truyen sau
// Pick: tao ra mot kieu du lieu moi bang cach lay mot vai key cua type da co san
// Omit: tao ra mot kieu du lieu moi bang cach xoa mot vai key cua type da co san
// ReturnType: lay kieu tra ve cua mot function nao do

interface Props {
    a: string,
    b: string,
    c?: string,
    d?: string
}

const props1: Partial<Props> = {}           // Hoan toan khong loi trong khi a, b la 2 truong required
console.log(props1)
const props2: Required<Props> = {           // Neu khong khai bao c, d thi se loi chac
    a: 'string 1',
    b: 'string 2',
    c: 'string 3',
    d: 'string 4'
}
console.log(props2)

const props3: Readonly<Props> = {
    a: 'string a',
    b: 'string b'
}
// props3.a = 'string a1' // Loi het toan bo

interface name {
    name: string,
    age: number
}

type sv = 'Le Nhat Duy' | 'Tang Kim Long' | 'Hoang Phuoc Gia Nguyen'
//Recore<Keys, Type>: key phai la union hay gi do?? khong duoc truyen interface vao key
const props4: Record<sv, name> = {
    "Le Nhat Duy": { name: "Le Nhat Duy", age: 22 },
    "Tang Kim Long": { name: "Tang Kim Long", age: 22 },
    "Hoang Phuoc Gia Nguyen": { name: "Hoang Phuoc Gia Nguyen", age: 22 },
}
// Khong duoc
// const props5: Record<name, sv> = {

// }

const props6: Pick<Props, "a" | "c"> = {
    a: "string 1",
    c: 'string 3',      // c van co thuoc tinh la optional nen co the khong truyen
}

const props7: Omit<Props, "a" | "b" | "d"> = {
    c: "string c"       // Con lai moi key la c thoi
}

const func = (api: string) => {
    return Promise.resolve(true)
}
let props8: ReturnType<typeof func>;
type T1 = ReturnType<typeof func>
type T2 = ReturnType<() => void>


