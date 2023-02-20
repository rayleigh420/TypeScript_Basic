import { checkToken } from "./check"

//Interface
interface Info {
    name: string,
    // address: string,
    address?: string[]
}

interface Auth {
    userName: string,
    password: string,
    email: string,
    accessToken?: string    // Optional Property khi do kieu du lieu cua bien se la string | undefined. 
    //Theo nguyen tac dung bien co 2 kieu khong the truyen vao bien co 1 kieu duoc.
    info?: Info
}

const user: Auth[] = [];

const newUser: Auth = {
    userName: "Le Nhat Duy",
    password: '12345678',
    email: 'nhatduy0409@gmail.com',
    accessToken: '27429472934924234k23nr2k3r293r23ofjo2ifj029fj209f',
    info: {
        name: "Karen",
        address: ['Ho Chi Minh', 'Quang Ngai']
    }
}
user.push(newUser)

const otherUser: Auth = {
    userName: "karen",
    password: 'lenhatduy',
    email: 'nhatduy040@gmail.com',
    info: {
        name: "Le Nhat Duy"
    }
}
user.push(otherUser)

// Log user array
console.log(user)

// Call function, khi do strict mode se check
if (newUser.accessToken) {
    checkToken(newUser.accessToken)
}

// Function, neu nhu gan kieu tra ve cua funtion la string thi phai return chac hon do return co the tra ve undefined hoac null hoac string
// Thuc te khong dinh nghia kieu tra ve cho ham
const getName = (auth: Auth) => {
    return auth.info?.name
}
console.log("Name of user: ", getName(newUser))
console.log("Name of user: ", getName(otherUser))

// Optional chaining
const getAddress = (auth: Auth) => {
    return auth.info?.address?.[0]
}
console.log("Address: ", getAddress(newUser))
console.log("Address: ", getAddress(otherUser))