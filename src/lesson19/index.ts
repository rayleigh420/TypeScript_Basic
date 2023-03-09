// Generic
const last = <T>(arr: T[]) => arr[arr.length - 1]
console.log(last([1, 2, 3, 4, 5]))
console.log(last(['Le', 'Nhat', 'Duy']))
console.log(last<boolean>([true, false, true]))
console.log(last<string | number | boolean>(['Duy', 10, true]))

// Generic Extends

// T sẽ kế thừa object {}, hay có thể hiểu object ta truyền vào bắt bược phải có 2 trường firstName và lastName
const makeFullName = <T extends { firstName: string, lastName: string }>(obj: T) => ({ ...obj, fullName: `${obj.firstName} ${obj.lastName}` })
console.log(makeFullName({ email: 'nhatduy0409@gmail.com', age: 22, firstName: "Le Nhat", lastName: "Duy" }).fullName)

// Khi ma chung ta chua biet chung ta truyen tham so vao la kieu du lieu gi, nhung ta lai can access vao mot thuoc tinh trong do
// Neu khong dung generic thi typescript se khong biet ma goi y, ma tham thi loi

// Voi truong hop nay ta thay todo ta chua biet se truye vao theo kieu gi
// Do do ta se truyen theo kieu object
// Neu ra chuot vao addTodo function thi ta se thay kieu du lieu tra ve khong co gi lien quan den todo ca
// Trong mot so truong hop todo ta truyen vao co mot thuoc tinh la name... vi du todo: {name: 'todo'}
// Tuy nhien khong phai luc nao todo cung se co kieu du lieu nay
// Khi do ta .name se khong biet duoc
// Thong thuong neu kieu truyen vao la kieu chung chung nhu object thi khi do typescript se khong biet kieu du lieu tra ve cua ham la gi
// Do do nen su dung generic   
// Neu dung generic de extends thi kieu du lieu tra ve cua typescript se bat buoc co kieu T nao do tuy khong biet kieu do la kieu gi
// Nhung typescript van chap nhan tra ve kieu T

const addTodo = (todo: object) => {
    return {
        ...todo,
        id: 1
    }
}

// Neu ra chuot vao ta se thay kieu tra ve cua addNewTodo function
const addNewTodo = <T extends object>(todo: T) => {
    return {
        ...todo,
        id: 2
    }
}

console.log(addNewTodo({ name: "Le Nhat Duy" }).name)

// Generic interface
interface employee<T> {
    name: string,
    age: number,
    info: T
}

const emp: employee<{ school: string, address: string }> = {
    name: 'Le Nhat Duy',
    age: 22,
    info: {
        school: 'University of Science',
        address: "HCM City"
    }
}

console.log(emp)