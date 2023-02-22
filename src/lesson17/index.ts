const newArr = ['Javascript', "Typescript", "ReactJS"]
const newObj = {
    name: "Karen",
    age: 20,
}

const [a1, b1, c1] = newArr
console.log(a1, b1, c1)

let ob = { ...newArr }
console.log(ob)

// ob = [...newObj]
// console.log(ob)